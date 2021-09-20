const Profile = require("../model/Profile");
const Utils = require("../utils/jobUtils");

module.exports = {
  index(req, res) {
    const profile = Profile.get();
    const jobUp = Utils.upJob();
    const statusCount = Utils.count();
    const freeHours = Utils.freeHours();

    return res.render("index", {
      jobs: jobUp,
      profile: profile,
      statusCount: statusCount,
      freeHours: freeHours,
    });
  },
};
