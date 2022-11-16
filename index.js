require("dotenv").config();
const basic = require("./commands/basic");
const infrastructure = require("./commands/infrastructure");
const insert_remove = require("./commands/insert_remove");
const join = require("./commands/join");
const wildcards = require("./commands/wildcards");
const update = require("./commands/update");
const subqueries = require("./commands/subqueries");
const union = require("./commands/union");

// infrastructure.runAllQueries();
// basic.runAllQueries();
// join.runAllQueries();
// insert_remove.runAllQueries();
// wildcards.runAllQueries();
// update.runAllQueries();
// subqueries.runAllQueries();
union.runAllQueries();

// order and sort
// conditions: having, exists, any, all
// range (between)
// group **
// update
// count
// procedures
