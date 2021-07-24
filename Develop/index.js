// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
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
        name: 'license',
        message: "What kind of license should your project have?",
    },
    { 
        type: 'input',
        name: 'dependencies',
        message: "What command should be run to install dependencies?",
    },
    { 
        type: 'input',
        name: 'test',
        message: "What command should be run to run tests?",
    },
    { 
        type: 'input',
        name: 'feature',
        message: "What does the user need to know about using the repo?",
    },
    { 
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about contributing to the repo?",
    },
];

const userInputs = ["hello"];

function inquireQuestion(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            userInputs.push(data);
        }
        )
    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        
        err ? console.error(err) : console.log('Commit logged!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquireQuestion(questions);
    writeToFile('README.md', userInputs);
    
}

// Function call to initialize app
init();
