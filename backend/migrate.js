require("dotenv").config();

const fs = require('fs');
const mysql = require('mysql2/promise');

const migrate = async () => {
  const { REACT_APP_DB_HOST, REACT_APP_DB_USER, REACT_APP_DB_PASSWORD, REACT_APP_DB_NAME } = process.env;
  const connection = await mysql.createConnection({
    host: REACT_APP_DB_HOST,
    user: REACT_APP_DB_USER,
    password: REACT_APP_DB_PASSWORD,
    multipleStatements: true,
    database: REACT_APP_DB_NAME,
  });
  console.log(connection);
  
  await connection.query(`create database ${REACT_APP_DB_NAME}`);
  await connection.query(`use ${REACT_APP_DB_NAME}`);

  const sql = fs.readFileSync("./asset/coordonnees_csv.sql", "utf8");

  await connection.query(sql);

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
