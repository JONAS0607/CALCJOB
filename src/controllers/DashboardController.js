const Profile = require("../model/Profile");
const Utils = require("../utils/jobUtils");

module.exports = {
  index(req, res) {
    const profile = Profile.get();
    const JobUp = Utils.upJob();
    return res.render("index", {
      jobs: JobUp,
      profile: profile,
    });
  },
};
