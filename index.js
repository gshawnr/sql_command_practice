require("dotenv").config();
const basic = require("./commands/basic");
const infrastructure = require("./commands/infrastructure");
const join = require("./commands/join");
const insert_remove = require("./commands/insert_remove");

basic.runAllQueries();
// infrastructure.runAllQueries();
// join.runAllQueries();
// insert_remove.runAllQueries();
