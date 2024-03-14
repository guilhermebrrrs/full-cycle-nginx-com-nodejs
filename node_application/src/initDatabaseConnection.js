const mysql = require("mysql");

const databaseConfig = {
  host: "database",
  user: "root",
  password: "root",
  database: "node_application",
};

const connection = mysql.createConnection(databaseConfig);

connection.connect();

const executeQuery = function (queryStr, callback) {
  try {
    const result = connection.query(queryStr, callback);

    return result;
  } catch (e) {
    console.error("e", e);
  }
};

module.exports = {
  executeQuery: executeQuery,
};
