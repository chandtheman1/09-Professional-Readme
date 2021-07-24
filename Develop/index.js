// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    ["What is your GitHub Username?", "username"],
    ["What is your email address?", "email"],
    ["What is your project name?", "projectName"],
    ["Please write a short description of your project?", "description"],
    ["What kind of license should your project have?", "license"],
    ["What command should be run to install dependencies?", "dependencies"],
    ["what command should be run to run tests?", "test"],
    ["What does the user need to know about using the repo?", "feature"],
    ["What does the user need to know about contributing to the repo?", "contribution"],
];

questions.forEach(([question, name]) => {
    questionObject = {
        type: 'input',
        message: question,
        name: name,
    }
})

console.log(questionObject);

function inquireQuestion(questions) {
    inquirer
        .prompt([ 
            {
                type: 'input',
                message: question,
                name: name,
            }
            
        ])
    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquireQuestion(questions);
   
}

// Function call to initialize app
init();
