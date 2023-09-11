const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README.md created successfully!');
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This application is covered under the ${answers.license} license.

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}).  
You can also visit my [GitHub profile](https://github.com/${answers.githubUsername}).
    `;

    writeToFile('README.md', readmeContent);
  });
}

init();
