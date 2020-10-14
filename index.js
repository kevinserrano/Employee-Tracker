const mysql = require("mysql");
const inquirer = require("inquirer");
const { start } = require("repl");
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQLPW,
    database: "employee_databaseDB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});