const db = require("../db");
const connection = db.connection;

exports.runAllQueries = () => {
  try {
    connection.connect();

    const queries = [
      // get total number of orders by product
      //
      // get total quantity of items sold by product
      //
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
