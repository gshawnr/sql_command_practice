const db = require("../db");
const connection = db.connection;
// open new mysql connection

const runAllQueries = () => {
  try {
    connection.connect();
    let queries = [
      // Q1 get all users with orders
      //
      // Q2 get all users and also get associated orders if they exist
      //
      // Q3 get all orders and all products, matching where possible (hint mysql does not support full join)
    ];

    for (let x = 0; x < queries.length; x++) {
      connection.query(queries[x], (error, results) => {
        if (error) {
          throw error;
        }

        console.log(queries[x], results);
      });
    }
  } catch (err) {
    console.log("error", err);
  } finally {
    // close after all executions
    connection.end();
  }
};

exports.runAllQueries = runAllQueries;

/*
ANSWERS
Q1

*/
