//Iniciando async await nos jobs
const Database = require('../db/config');

module.exports = {
  async get() {
    const db = await Database();
    const sql = `SELECT * FROM jobs`;
    const jobs2 = await db.all(sql);

    await db.close();
    return jobs2.map((job) => ({
      id: job.id,
      name: job.name,
      'daily-hours': job.daily_hours,
      'total-hours': job.total_hours,
      createdAt: job.createdAt,
    }));
  },
  async update(updatedJob, jobId) {
    const db = await Database();

    await db.run(`UPDATE jobs SET      
      name = "${updatedJob.name}",
      daily_hours = ${updatedJob['daily-hours']},
      total_hours = ${updatedJob['total-hours']}
      WHERE id = '${jobId}'
      ;
      `);

    await db.close();
  },
  async delete(jobId) {
    const db = await Database();
    await db.run(`DELETE FROM jobs WHERE id = '${jobId}'
    ;`);
    // jobs = jobs.filter((job) => Number(job.id) !== Number(jobId));
    await db.close();
  },
  async create(req) {
    const db = await Database();
    await db.run(`INSERT INTO 
    jobs(
      name,
      daily_hours,
      total_hours,
      createdAt
    ) VALUES(
      "${req.body.name}",
      ${req.body['daily-hours']},
      ${req.body['total-hours']},
      ${Date.now()}
    ) 
    
    ;`);
    await db.close();
  },
};
