const db = require("../db");
const connection = db.connection;

exports.runAllQueries = () => {
  try {
    connection.connect();

    const queries = [
      // get the total qty if inventory items as Total
      //
      // get the average order size (qty) of pens sold as Average_Order_Size
      //
      // get the total number of orders as Total Orders
    ];

    for (let query of queries) {
      connection.query(query, (err, res) => {
        if (err) console.log(err);

        console.log(query, res);
      });
    }
  } catch (err) {
    console.log("error", err);
  } finally {
    connection.end();
  }
};
