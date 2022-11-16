const db = require("../db");

const connection = db.connection;

const queries = [
  // Combine customer and supplier name and city data into one table
  //
  // Combine all customer and supplier name and city data into one table - show duplicates
  //
];

exports.runAllQueries = () => {
  try {
    connection.connect();

    for (let query of queries) {
      connection.query(query, (err, res) => {
        if (err) throw err;

        console.log(query, res);
      });
    }
  } catch (err) {
    console.log("error: ", err);
  } finally {
    connection.end();
  }
};
