const mysql = require("mysql");
const connection = mysql.createPool ({
  // host: "nr.txio.live",
   host: "13.250.36.154",
  // host: "sql",
  user: "digitalman",
  password: "c1vG7R34",
  database: "tracker",
  port: 3306,
});

module.exports = connection;
