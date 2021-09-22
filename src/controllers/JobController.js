const Job = require("../model/Job");
const Profile = require("../model/Profile");
const Utils = require("../utils/jobUtils");

module.exports = {
  create(req, res) {
    return res.render("job");
  },
  save(req, res) {
    Job.create(req);
    return res.redirect("/");
  },
  async show(req, res) {
    const profile = await Profile.get();
    const job = await Utils.findJob(req, res);
    job.budget = Utils.calculateBudget(job, profile["value-hour"]);

    return res.render("job-edit", { job });
  },
  async update(req, res) {
    const jobId = req.params.id;
    const updatedJob = {
      name: req.body.name,
      "daily-hours": req.body["daily-hours"],
      "total-hours": req.body["total-hours"],
    };

    Job.update(updatedJob, jobId);
    return res.redirect("/job/" + jobId);
  },
  delete(req, res) {
    const jobId = req.params.id;
    Job.delete(jobId);
    return res.redirect("/");
  },
};
