const Job = require("../model/Job");
const Profile = require("../model/Profile");

module.exports = {
  
  remainingDays(job) {
    //total de dias de trabalho
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
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
  upJob() {
    const profile = Profile.get();
    const job = Job.get();
    const updatedJobs = job.map((job) => {
      //job ajustes

      //dias que faltam para terminar o trabalho
      const remaining = this.remainingDays(job);
      //status do trabalho
      const status = remaining <= 0 ? "done" : "progress";
      //espalhando os objetos da array jobs e adicionando remaining
      return {
        ...job,
        remaining,
        status,
        budget: this.calculateBudget(job, profile["value-hour"]),
      };
    });
    return updatedJobs;
  },
  calculateBudget: (job, valueHour) => {
    return valueHour * job["total-hours"];
  },
};
