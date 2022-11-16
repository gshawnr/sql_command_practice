const db = require("../db");

const connection = db.connection;

let queries = [
  // change the qty of pens on hand to a new value
  //
  // change the spelling of one of the users firstnames
  //
];

connection.connect();

const runAllQueries = () => {
  for (let query of queries) {
    try {
      connection.query(query, (error, res) => {
        if (error) throw error;

        console.log(query, res);
      });
    } catch (err) {
      console.log("error", err);
    }
  }

  connection.end();
};

exports.runAllQueries = runAllQueries;
