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

function start(){
    inquirer.prompt(
        {
type: "list",
message: "What would you like to do?",
choices: [
    "Add Department",
    "Add Role",
    "Add Employee",
    "View Department",
    "View Role",
    "View Employee",
    "Update Employee Role",
    "EXIT"],
name: "choice"

    })
}