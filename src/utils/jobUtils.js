const Job = require('../model/Job');
const Profile = require('../model/Profile');

module.exports = {
  async findJob(req, res) {
    const getJob = await Job.get();
    const jobId = req.params.id;
    const job = getJob.find((job) => Number(job.id) === Number(jobId)); // vai encontrar o id na array e trazer ele para mim, se existir e for igual ao do req.params.id
    if (!job) {
      return res.send('Trabalho não encontrado!');
    }

    return job;
  },
  remainingDays(job) {
    //total de dias de trabalho
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed();
    //dia da criação
    const createdDate = new Date(job.createdAt);
    // dia futuro
    const dueDay = createdDate.getDate() + Number(remainingDays);
    // data de vencimento em milisegundos
    const dueDateInMs = createdDate.setDate(dueDay);
    // diferença do tempo em milisegundos
    const timeDiffInMs = dueDateInMs - Date.now();
    // um dia em  mili
    const dayInMs = 1000 * 60 * 60 * 24;
    // retornando os dias que faltam para terminar o trabalho
    const dayDiff = Math.floor(timeDiffInMs / dayInMs);
    return dayDiff;
  },
  async upJob() {
    const profile = await Profile.get();
    const job = await Job.get();
    const updatedJobs = job.map((job) => {
      //job ajustes

      //dias que faltam para terminar o trabalho
      const remaining = this.remainingDays(job);

      //status do trabalho
      const status = remaining <= 0 ? 'done' : 'progress';
      //espalhando os objetos da array jobs e adicionando remaining

      return {
        ...job,
        remaining,
        status,
        budget: this.calculateBudget(job, profile['value-hour']),
      };
    });

    return updatedJobs;
  },
  calculateBudget: (job, valueHour) => {
    return valueHour * job['total-hours'];
  },
  async count() {
    const jobs = await Job.get();
    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length,
    };
    jobs.map((job) => {
      const remaining = this.remainingDays(job);
      const status = remaining <= 0 ? 'done' : 'progress';
      statusCount[status] += 1;
    });

    return statusCount;
  },
  async freeHours() {
    const profile = await Profile.get();
    const status = await this.upJob();
    //quantidade de horas que quero trabalhar por dia
    const hoursDay = profile['hours-per-day'];
    // menos os trabalhos em progresso
    let jobTotalHours = 0;
    status.map((state) => {
      if (state.status === 'progress') {
        jobTotalHours += Number(state['daily-hours']);
      }
    });

    let freeHours = hoursDay - jobTotalHours;
    return freeHours;
  },
};
