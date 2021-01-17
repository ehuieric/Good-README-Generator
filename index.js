const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project',
        default: false,
    },

    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your project',
        default: false,
    },


    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: false,
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'What are the instructions and examples for use?',
        default: false,
    },

    {
        type: 'input',
        name: 'Credit',
        message: 'What is the list of collaborators, any third-party assets or tutorial ?',
        default: false,
    },

    {
        type: 'rawlist',
        name: 'license',
        message: 'What license did you use?',
        choices: ['ISC', 'IBM', 'MIT', 'Mozilla'],
      },

    {
        type: 'input',
        name: 'contributors',
        message: 'What is the code of conduct for this project?',
        default: false,
    },

    {
        type: 'input',
        name: 'Test',
        message: 'how do you test this project?',
        default: false,
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        default: false,
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: false,
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log('hello')
    console.log(JSON.stringify(answers, null, '  '));
    let badge;
    if(answers.license === 'MIT') {
        badge= `[![MIT License](https://img.shields.io/badge/license-MIT-green)]()`
    }

    if(answers.license === 'ISC') {
        badge= `[![ISC License](https://img.shields.io/badge/license-ISC-blue)]()`
    }

    if(answers.license === 'IBM') {
        badge= `[![IBM License](https://img.shields.io/badge/license-IBM-yellow)]()`
    }

    if(answers.license === 'Mozilla') {
        badge= `[![Mozilla License](https://img.shields.io/badge/license-Mozilla-red)]()`
    }
    const readme = ` 
# ${answers.title} ${badge}\n
## Description:\n
${answers.description}\n
## Table of content:\n
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credit)
- [License](#license)
- [Contributors](#contributors)
- [Test](#test)
- [Questions](#questions)
## Installation:\n
${answers.installation}\n
## Usage:\n
${answers.usage}\n
## Credit:\n
${answers.credit}\n
## License:\n
${answers.license}\n
## Contributors:\n
${answers.contributors}\n
## Test:\n
${answers.test}\n
## Questions:\n
[${answers.username}](https://github.com/${answers.username})\n
for any question contact me at ${answers.email}\n
     `
    fs.writeFile('README.md', `${readme}`, (err) =>
         err ? console.error(err) : console.log('Commit logged!')
       );
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
