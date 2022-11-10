const db = require("../db");

// get the exported connection
const connection = db.connection;

const runAllQueries = () => {
  try {
    // open the connection
    connection.connect();

    const queries = [
      // Q1 create a new table new table with id col1 and col2
      //
      // Q2 drop a table created above if not exists do Q1 first
    ];

    for (let x = 0; x < queries.length; x++) {
      connection.query(queries[x], (err, res) => {
        if (err) {
          throw err;
        }

        console.log(queries[x], res);
      });
    }
  } catch (err) {
    console.log("error", err);
  } finally {
    // close the connection
    connection.end();
  }
};

exports.runAllQueries = runAllQueries;

/*
ANSWERS
Q1

*/
