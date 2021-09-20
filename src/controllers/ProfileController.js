const Profile = require("../model/Profile");
module.exports = {
  async index(req, res) {
    const prof = await Profile.get();
    return res.render("profile", { profile: prof });
  },
  async update(req, res) {
    //req.body para pegar os dados
    const data = req.body;

    // definir quantas semandas tem em um ano
    const weeksPerYear = 52;
    //remover as semanas de férias do ano, para pegar quantas semanas tem em 1 mês
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;
    // quantas horas por semana estou trabalhando
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
    // total de horas trabalhadas no mês
    const monthlyTotalHours = weekTotalHours * weeksPerMonth;
    // qual será o valor da minha hora
    const valueHour = data["monthly-budget"] / monthlyTotalHours;
    const prof = await Profile.get();
    await Profile.update({
      ...prof,
      ...req.body,
      "value-hour": valueHour,
    });
    // TRAVEI AQUI NO REDIRECIONAMENTO : tinha uma variavel com a nomenclatura errada.
    const profileUpdated = await Profile.get();
    return res.render("profile", { profile: profileUpdated });
  },
};
