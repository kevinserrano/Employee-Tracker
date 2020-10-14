const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table")
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
message: "What would you like to do today?",
name: "options",
choices: [
    "Add Department",
    "Add Role",
    "Add Employee",
    "View Departments",
    "View Roles",
    "View Employees",
    "Update Employee Role",
    "Nothing",
        ]
    })
.then(function(result) {
    switch (result.options){
        case "Add Department":
            return addDepartment();
            break;
        case "Add Role":
            return addRole();
            break;
        case "Add Employee":
            return addEmployee();
            break;
        case "View Departments":
            return viewDepartments();
            break;
        case "View Roles":
            return viewRoles();
            break;
        case "View Employees":
            return viewEmployees();
            break;
        case "Update Employee Role":
            return updateRole();
            break;
            case "Nothing":
                connection.end();
                break;

    };
});
};

function addDepartment(){
    inquirer.prompt([{
        type: "input",
        message: "Department Name:",
        name: "department"
    }, ]).then(function(res){
        connection.query('INSERT INTO department (name) VALUES ?', [res.department], function(err, data){
            if (err) throw err;
        });
    start();
    })
};