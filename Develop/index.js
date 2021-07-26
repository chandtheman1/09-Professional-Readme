// calls other packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//objects within Array for the Inquirer prompt
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: "What is the project name?",
    },
    { 
        type: 'input',
        name: 'username',
        message: "What is your GitHub Username?",
    },
    { 
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    { 
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project?",
    },
    {
        type: 'input',
        name: 'instructions',
        message: "Please advise on how to install the application."
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please advise on how to use the application?'
    },
    { 
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    { 
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about contributing to the repo?",
    },
    { 
        type: 'input',
        name: 'testing',
        message: "What command should be run to run tests?",
    },
];

const userInputs = [];

//inquirer function 
function inquireQuestion(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            userInputs.push(data);
            writeToFile('README.md', userInputs);
        }
        )
    
}

// node fs write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data) , (err) => {
        
        err ? console.error(err) : console.log('Commit logged!');
    })
}

//initialise
function init() {
    inquireQuestion(questions);
    
}

init();
