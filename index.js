 const inquirer = require("inquirer");
 
 inquirer
 .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "username",
    },
    {
        type: "password",
        message: "What is your password?",
        name: "password",
    },
 ])
 .then ((response) => {
    console.log(response)
 });