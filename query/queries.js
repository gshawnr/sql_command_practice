const db = require("../db");
const connection = db.connection;
// open new mysql connection

const runAllQueries = () => {
  try {
    connection.connect();
    let queries = [
      // get all users
      // "SELECT * FROM Users",
      // get all users with orders
      // "SELECT Users.*, Orders.* FROM Users INNER JOIN Orders ON Users.PersonId = Orders.UserId",
      // get all users and also get associated orders if they exist
      // "SELECT Users.*, Orders.* FROM Users LEFT JOIN Orders ON Users.PersonId = Orders.UserId",
    ];

    for (let x = 0; x < queries.length; x++) {
      connection.query(queries[x], (error, results) => {
        if (error) {
          throw error;
        }

        console.log(queries[x], results);
      });
    }

    // close after all executions
    connection.end();
  } catch (err) {
    console.log("error querying data", err);
  }
};

exports.runAllQueries = runAllQueries;
