// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data[0].projectName}

## Description
${data[0].description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [Questions](#questions)

## Installation
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  ${data[0].instructions}

## Usage
  Provide instructions and examples for use. Include screenshots as needed.
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:      
  ${data[0].usage}

## License
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ${data[0].license}
  
## Features
  If your project has a lot of features, list them here.
  ${data[0].feature}

## How to Contribute
  ${data[0].contribution}

## Testing
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  ${data[0].testing}

## Questions
Please contact me through [${data[0].username}](https://github.com/${data[0].username}) or [Email](mailto:${data[0].email})

    `;
}


module.exports = {
  
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,

};
