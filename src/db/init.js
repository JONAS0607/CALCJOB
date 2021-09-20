const Database = require("./config");

const initDb = {
  //estrutura para fazer o js esperar
  async init() {
    const db = await Database();
    const sqlProfile = `
        CREATE TABLE 
        profile(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
            );
            `;
    const sqlJobs = `
            CREATE TABLE 
            jobs(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                daily_hours INT,
                total_hours INT,
                createdAt DATETIME
                );
                `;
    const insertProfile = `
INSERT INTO 
profile(
    name, 
    avatar, 
    monthly_budget, 
    days_per_week, 
    hours_per_day, 
    vacation_per_year, 
    value_hour
    ) 
VALUES(
    "jonas",
    "https://github.com/JONAS0607.png", 
    35000,
    5, 
    2, 
    4, 
    75
    );
`;
    const insertJob = `
INSERT INTO 
jobs(
    name, 
    daily_hours, 
    total_hours, 
    createdAt
    ) 
    VALUES(
    "Game",
    2,
    10,
    1617514346018
    );`;
    await db.exec(sqlProfile);
    await db.exec(sqlJobs);
    await db.run(insertProfile);
    await db.run(insertJob);
    await db.close();
  },
};

initDb.init();
/**
 *
 */
