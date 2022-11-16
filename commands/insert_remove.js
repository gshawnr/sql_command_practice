const db = require("../db");

// get the exported connection
const connection = db.connection;

const runAllQueries = () => {
  try {
    // open the connection
    connection.connect();

    const queries = [
      // Q1 insert a new user
      //
      // Q2 remove user with id 7
      //
      // Q3 insert a new user without an last name value
      //
      // Q4 remove user with first name of Jane (prev user)
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
