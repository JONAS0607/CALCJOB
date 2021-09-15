const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
  return response.sendFile(__dirname + 'job-edit.html');
});

routes.get('/job-edit.html', (req, res) => {
  return res.redirect('/');
});

module.exports = routes;
