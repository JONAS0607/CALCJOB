let jobs = [
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
};
