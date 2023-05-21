require("dotenv").config()
const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    database: "studylinq",
    password: process.env.DBPASS
});

module.exports = pool;
