const db = require("../db");

const connection = db.connection;

exports.runAllQueries = () => {
  try {
    connection.connect();

    const queries = [
      // create a stored procedure to get all users AND then execute the procedure
      //
      // create a stored procedure to get the number of orders by productId AND then execute the procedure
      //
      // AFTER TESTING - DROP ALL STORED PROCEDURES
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
    connection.end();
  }
};
