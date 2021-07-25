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
  - [How to Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [Questions](#questions)

## Installation
  
  ${data[0].instructions}

## Usage
       
  ${data[0].usage}

## License
  
  ${data[0].license}

## How to Contribute

  ${data[0].contribution}

## Testing
  
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
