 const inquirer = require("inquirer");
 const fs = require("fs");
 
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
        message: "Write a test for your application and then provide an example on how to run it.",
        name: "tests",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "whybuild",
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
 ])
 .then ((response) => {
    console.log(response);

    response.title;
    response.description;
    response.install;
    response.use;
    response.license;
    response.contributions;
    response.tests;
    response.whybuild;
    response.username;
    response.email;


var content = `** ${response.title}

* TEST

${response.description}

* TEST 2 <br />
TEST<br />

TEST TEST`;


    
    fs.writeFile("./test123.md", content, err => {
        if (err) {
            console.error(err);
        }
    })

 });