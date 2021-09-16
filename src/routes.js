const express = require('express');
const routes = express.Router();
// const views = __dirname + '/views/';

const profile = {
  name: 'Jonas',
  avatar: 'https://github.com/JONAS0607.png',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4,
};
const jobs = [
  {
    id: 1,
    name: 'Pizzaria Cabral',
    'daily-hours': 1,
    'total-hours': 10,
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: 'Escolinha',
    'daily-hours': 1,
    'total-hours': 5,
    createdAt: Date.now(),
  },
];

// console.log(views);
routes.get('/', (req, res) => res.render('index', { jobs }));
routes.get('/index.html', (req, res) => res.render('index', { jobs }));

routes.get('/job-edit.html', (req, res) => {
  return res.render('job-edit');
});

routes.get('/job.html', (req, res) => {
  return res.render('job');
});
// USANDO O METHOD POST
routes.post('/job.html', (req, res) => {
  //{ name: 'BARBIERO', 'daily-hours': '1', 'total-hours': '10' }
  const lastId = jobs[jobs.length - 1]?.id || 1;

  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    'daily-hours': req.body['daily-hours'],
    'total-hours': req.body['total-hours'],
    createdAt: Date.now(),
  });
  return res.redirect('/');
});

routes.get('/profile.html', (req, res) => {
  return res.render('profile', { profile });
});

module.exports = routes;
