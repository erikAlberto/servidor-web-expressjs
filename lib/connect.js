const debug = require("debug")("app:database");
const config = require("../config");

const postgress = require('pg');
const connection =  new postgress.Connection(config.databaseUrl);

//console.log("connected DB");
debug("Connect to database");

module.exports = connection;
