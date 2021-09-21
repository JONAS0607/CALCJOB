const Job = require('../model/Job');
const Profile = require('../model/Profile');
const Utils = require('../utils/jobUtils');

module.exports = {
  create(req, res) {
    return res.render('job');
  },
  save(req, res) {
    Job.create(req);
    return res.redirect('/');
  },
  async show(req, res) {
    const profile = await Profile.get();
    const job = await Utils.findJob(req, res);
    job.budget = Utils.calculateBudget(job, profile['value-hour']);

    return res.render('job-edit', { job });
  },
  async update(req, res) {
    const jobs = await Job.get();
    const job = await Utils.findJob(req, res);
    const updatedJob = {
      ...(await job),
      name: req.body.name,
      'daily-hours': req.body['daily-hours'],
      'total-hours': req.body['total-hours'],
    };

    const newJobs = jobs.map((jobM) => {
      if (Number(jobM.id) === Number(job.id)) {
        jobM = updatedJob;
      }

      return jobM;
    });

    Job.update(newJobs);

    return res.redirect('/job/' + job.id);
  },
  delete(req, res) {
    const jobId = req.params.id;
    Job.delete(jobId);
    return res.redirect('/');
  },
};
