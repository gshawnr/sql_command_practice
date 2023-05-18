const db = require("../db");

const connection = db.connection;

const queries = [
  // select all users that have ordered pens
  //
];

const runAllQueries = () => {
  // open connection
  connection.connect();
  try {
    for (let query of queries) {
      connection.query(query, (err, res) => {
        if (err) throw err;

        console.log(query, res);
      });
    }
  } catch (err) {
    console.log("error:", err);
  } finally {
    // close connection
    connection.end();
  }
};

exports.runAllQueries = runAllQueries;
