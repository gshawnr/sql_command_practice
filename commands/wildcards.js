const db = require("../db");

const connection = db.connection;

const runAllQueries = () => {
  try {
    // open connection
    connection.connect();

    // NOTE: wildcards are used with the LIKE operator only % and _ in mySql
    const queries = [
      // get users where first name starts with "j"
      //
      // get users that have a firstname of as follows St_ve
    ];

    for (let query of queries) {
      connection.query(query, (err, res) => {
        if (err) throw err;

        console.log(query, res);
      });
    }
  } catch (err) {
    console.log("error", err);
  } finally {
    // close connection
    connection.end();
  }
};

exports.runAllQueries = runAllQueries;
