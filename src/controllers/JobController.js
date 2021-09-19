const Job = require("../model/Job");
const Profile = require("../model/Profile");
const Utils = require("../utils/jobUtils");


module.exports = {
    
  create(req, res) {
    return res.render("job");
  },
  save(req, res) {
    const jobs = Job.get();
    //{ name: 'BARBIERO', 'daily-hours': '1', 'total-hours': '10' }
    const lastId = jobs[jobs.length - 1]?.id || 0;

    jobs.push({
      id: lastId + 1,
      name: req.body.name,
      "daily-hours": req.body["daily-hours"],
      "total-hours": req.body["total-hours"],
      createdAt: Date.now(),
    });
    return res.redirect("/");
  },
  show(req, res) {
    const profile = Profile.get();
    const jobId = req.params.id;
    const job = Job.get().find((job) => Number(job.id) === Number(jobId)); // vai encontrar o id na array e trazer ele para mim, se existir e for igual ao do req.params.id
    if (!job) {
      return res.send("Trabalho não encontrado!");
    }

    job.budget = Utils.calculateBudget(job, profile["value-hour"]);

    return res.render("job-edit", { job });
  },
  update(req, res) {
    const jobId = req.params.id;
    const jobs = Job.get();
    const job = jobs.find((job) => Number(job.id) === Number(jobId)); // vai encontrar o id na array e trazer ele para mim, se existir e for igual ao do req.params.id
    if (!job) {
      return res.send("Trabalho não encontrado!");
    }

    const updatedJob = {
      ...job,
      name: req.body.name,
      "daily-hours": req.body["daily-hours"],
      "total-hours": req.body["total-hours"],
    };

    const newJobs = jobs.map((job) => {
      if (Number(job.id) === Number(jobId)) {
        job = updatedJob;
      }
      return job;
    });

    Job.update(newJobs);

    return res.redirect("/job/" + jobId);
  },
  delete(req, res) {
    const jobId = req.params.id;
    Job.delete(jobId);
    return res.redirect("/");
  },
};
