const express = require("express");
const routes = express.Router();
// const views = __dirname + '/views/';

const Profile = {
  data: {
    name: "Jonas",
    avatar: "https://github.com/JONAS0607.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75,
  },
  controllers: {
    index(req, res) {
      return res.render("profile", { profile: Profile.data });
    },
    update(req, res) {
      //req.body para pegar os dados
      const data = req.body;

      // definir quantas semandas tem em um ano
      const weeksPerYear = 52;
      //remover as semanas de férias do ano, para pegar quantas semanas tem em 1 mês
      const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;
      // quantas horas por semana estou trabalhando
      const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
      // total de horas trabalhadas no mês
      const monthlyTotalHours = weekTotalHours * weeksPerMonth;
      // qual será o valor da minha hora
      const valueHour = data["monthly-budget"] / monthlyTotalHours;
      Profile.data = {
        ...Profile.data,
        ...req.body,
        "value-hour": valueHour,
      };
      // TRAVEI AQUI NO REDIRECIONAMENTO : tinha uma variavel com a nomenclatura errada.

      return res.render("profile", { profile: Profile.data });
    },
  },
};

const Job = {
  jobs: [
    // {
    //   id: 1,
    //   name: "Pizzaria Cabral",
    //   "daily-hours": 1,
    //   "total-hours": 10,
    //   createdAt: Date.now(),
    // },
    // {
    //   id: 2,
    //   name: "Escolinha",
    //   "daily-hours": 1,
    //   "total-hours": 5,
    //   createdAt: Date.now(),
    // },
  ],
  controllers: {
    index(req, res) {
      return res.render("index", {
        jobs: Job.services.upJob(),
        profile: Profile.data,
      });
    },
    create(req, res) {
      return res.render("job");
    },
    save(req, res) {
      //{ name: 'BARBIERO', 'daily-hours': '1', 'total-hours': '10' }
      const lastId = Job.jobs[Job.jobs.length - 1]?.id || 0;

      Job.jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        createdAt: Date.now(),
      });
      return res.redirect("/");
    },
    show(req, res) {
      const job = Job.services.findJob(req, res);

      job.budget = Job.services.calculateBudget(
        job,
        Profile.data["value-hour"]
      );

      return res.render("job-edit", { job });
    },
    update(req, res) {
      const job = Job.services.findJob(req, res);
      const updateJob = {
        ...job,
        name: req.body.name,
        "total-hours": req.body["total-hours"],
        "daily-hours": req.body["daily-hours"],
      };
      Job.jobs = Job.jobs.map((job) => {
        job = updateJob;
        return job;
      });

      return res.redirect("/job/" + job.id);
    },
    delete(req, res) {
      const jobId = req.params.id;
      Job.jobs = Job.jobs.filter((job) => Number(job.id) !== Number(jobId));
      return res.redirect("/");
    },
  },
  services: {
    findJob(req, res) {
      const jobId = req.params.id;
      const job = Job.jobs.find((job) => Number(job.id) === Number(jobId)); // vai encontrar o id na array e trazer ele para mim, se existir e for igual ao do req.params.id
      if (!job) {
        return res.send("Trabalho não encontrado!");
      }
      return job;
    },
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
      // um dia em  milli
      const dayInMs = 1000 * 60 * 60 * 24;
      // retornando os dias que faltam para terminar o trabalho
      const dayDiff = Math.floor(timeDiffInMs / dayInMs);
      return dayDiff;
    },
    upJob() {
      const updatedJobs = Job.jobs.map((job) => {
        //job ajustes

        //dias que faltam para terminar o trabalho
        const remaining = Job.services.remainingDays(job);
        //status do trabalho
        const status = remaining <= 0 ? "done" : "progress";
        //espalhando os objetos da array jobs e adicionando remaining
        return {
          ...job,
          remaining,
          status,
          budget: Job.services.calculateBudget(job, Profile.data["value-hour"]),
        };
      });
      return updatedJobs;
    },
    calculateBudget: (job, valueHour) => {
      return valueHour * job["total-hours"];
    },
  },
};

routes.get("/", Job.controllers.index);
routes.get("/index.html", Job.controllers.index);

routes.get("/job/:id", Job.controllers.show);
routes.post("/job/:id", Job.controllers.update);
routes.post("/job/delete/:id", Job.controllers.delete);

routes.get("/job.html", Job.controllers.create);
// USANDO O METHOD POST
routes.post("/job.html", Job.controllers.save);

routes.get("/profile.html", Profile.controllers.index);
routes.post("/profile", Profile.controllers.update);

module.exports = routes;
