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
        console.log(response);
        if (response.license == "GNU") {
            prepend("README.md", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "MIT") {
            prepend("README.md", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "BSD 2") {
            prepend("README.md", "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "BSD 3") {
            prepend("README.md", "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "Boost") {
            prepend("README.md", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "Creative Commons Zero") {
            prepend("README.md", "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "Eclipse") {
            prepend("README.md", "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "GNU Affero") {
            prepend("README.md", "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "GNU General Public") {
            prepend("README.md", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "GNU Lesser") {
            prepend("README.md", "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "Mozilla") {
            prepend("README.md", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }
        if (response.license == "The Unlicense") {
            prepend("README.md", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", err => {
                if (err) {
                    console.error(err);
                }
            })
        }

        if (err) {
            console.error(err);
        }
    })

 });