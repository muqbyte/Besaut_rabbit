const mysql = require("mysql");
const connection = mysql.createPool ({
  // host: "nr.txio.live",
  //  host: "13.250.36.154", // AWS
  // host: "sql",
  host: "datcbackend.eagleattech.com",
  user: "root",
  password: "c1vG7R34",
  database: "rabbitto",
  port: 3306,


  // host: "localhost",
  // user: "root",
  // password: "password",
  // database: "rabbitto",
  // port: 3306,
});

module.exports = connection;
