const db = require("../db");
const connection = db.connection;
// open new mysql connection

const runAllQueries = () => {
  try {
    connection.connect();
    let queries = [
      // Q1 get all users
      //
      // Q2 get first name and id only from users
      //
      // Q3 get distinct products from the orders table
      //
      // Q4 get all orders with ProductId 4 or 3
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
