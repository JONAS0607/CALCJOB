const Profile = require("../model/Profile");
const Utils = require("../utils/jobUtils");

module.exports = {
  async index(req, res) {
    const profile = await Profile.get();
    const jobUp = await Utils.upJob();
    const freeHours = await Utils.freeHours();
    const statusCount = Utils.count();

    return res.render("index", {
      jobs: jobUp,
      statusCount: statusCount,
      freeHours: freeHours,
      profile: profile,
    });
  },
};
