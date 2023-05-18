const db = require("../db");

const connection = db.connection;
exports.runAllQueries = () => {
  try {
    connection.connect();
    const queries = [
      // select all users and order by lastname in descending order
      //
    ];

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
