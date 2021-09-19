const express = require("express");
const routes = express.Router();
const DashboardController = require('./controllers/DashboardController')
const JobController = require("./controllers/JobController")
const ProfileController = require("./controllers/ProfileController");
// const views = __dirname + '/views/';



routes.get("/", DashboardController.index);
routes.get("/index.html",DashboardController.index);

routes.get("/job/:id", JobController.show);
routes.post("/job/:id", JobController.update);
routes.post("/job/delete/:id", JobController.delete);

routes.get("/job.html", JobController.create);
// USANDO O METHOD POST
routes.post("/job.html", JobController.save);

routes.get("/profile.html", ProfileController.index);
routes.post("/profile", ProfileController.update);

module.exports = routes;
