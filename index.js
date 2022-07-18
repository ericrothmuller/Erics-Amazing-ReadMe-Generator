 const inquirer = require("inquirer");
 const fs = require("fs");
 const prepend = require("prepend");
 
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
        message: "How would someone get started and install this project?",
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
        message: "What problem does this solve?",
        name: "problem",
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

var content = `# ${response.title}

${response.description}


## Getting Started and Installing Guide

${response.install}

## Table Of Contents

- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Usage

${response.use}


## Credits

${response.contributions}


## Tests

${response.tests}


## Questions

### Why was this built?

${response.whybuild}

###  What problem does it solve?

${response.problem}

### What is your contact information?

[GitHub Profile](https://github.com/${response.username})

If you have additional questions, please email me at ${response.email}.

## License


${response.license}`;


    
    fs.writeFile("./README.md", content, err => {
        if (response.license == "MIT") {
            prepend("README.md", " MIT LICENSE BADGE", err => {
                if (err) {
                    console.error(err);
                }
            })
            console.log("MIT LICENSE SELECTED")
        }

        if (err) {
            console.error(err);
        }
    })

 });