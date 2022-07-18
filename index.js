 const inquirer = require("inquirer");
 
 inquirer
 .prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your project's description?",
        name: "description",
    },
    {
        type: "input",
        message: "How would someone install their project?",
        name: "install",
    },
    {
        type: "input",
        message: "How would someone use your project",
        name: "use",
    },
    {
        type: "checkbox",
        message: "What type of license does your project have?",
        choices: ["GNU", "MIT", "BSD 2", "BSD 3", "Boost", "Creative Commons Zero", "Eclipse", "GNU Affero", "GNU General Public", "GNU Lesser", "Mozilla", "The Unlicense"],
        name: "license",
    },
    {
        type: "input",
        message: "Who contributed to your project?",
        name: "contributions",
    },
    {
        type: "input",
        message: "What type of license does your project have?",
        name: "license",
    },
 ])
 .then ((response) => {
    console.log(response)
 });