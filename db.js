var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.mysql_user,
  password: process.env.mysql_pass,
  database: "practiceDB",
});

exports.connection = connection;
