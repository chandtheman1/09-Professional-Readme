// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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

function inquireQuestion(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            userInputs.push(data);
            console.log(userInputs);
            writeToFile('README.md', userInputs);
        }
        )
    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data) , (err) => {
        
        err ? console.error(err) : console.log('Commit logged!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquireQuestion(questions);
    
}

// Function call to initialize app
init();
