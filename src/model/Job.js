let jobs = [
  {
    id: 1,
    name: "Pizzaria Cabral",
    "daily-hours": 1,
    "total-hours": 10,
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: "Escolinha",
    "daily-hours": 2,
    "total-hours": 1,
    createdAt: Date.now(),
  },
];

module.exports = {
  get() {
    return jobs;
  },
  update(newJob) {
    jobs = newJob;
  },
  delete(jobId) {
    jobs = jobs.filter((job) => Number(job.id) !== Number(jobId));
  },
  create(req, jobs, lastId) {
    jobs.push({
      id: lastId + 1,
      name: req.body.name,
      "daily-hours": req.body["daily-hours"],
      "total-hours": req.body["total-hours"],
      createdAt: Date.now(),
    });
  },
};
