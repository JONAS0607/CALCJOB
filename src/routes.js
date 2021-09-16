const express = require('express');
const routes = express.Router();
// const views = __dirname + '/views/';

const profile = {
  name: 'Jonas',
  avatar: 'https://avatars.githubusercontent.com/u/75738818?v=4',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4,
};

// console.log(views);
routes.get('/', (req, res) => res.render('index'));
routes.get('/index.html', (req, res) => res.render('index'));

routes.get('/job-edit.html', (req, res) => {
  return res.render('job-edit');
});
routes.get('/job.html', (req, res) => {
  return res.render('job');
});
routes.get('/profile.html', (req, res) => {
  return res.render('profile', { profile });
});

module.exports = routes;
