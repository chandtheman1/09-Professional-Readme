// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license[0].license) {
    case 'MIT':
      return "![MIT](https://img.shields.io/badge/License-MIT-brightgreen)";
    case 'APACHE 2.0':
      return "![APACHE2.0](https://img.shields.io/badge/License-APACHE2.0-blue)";
    case 'GPL 3.0':
      return "![GPL3.0](https://img.shields.io/badge/License-GPL3.0-green)";
    case 'BSD 3':
      return "![BSD3](https://img.shields.io/badge/License-BSD3-yellow)";
    case 'None':
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license[0].license) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
    case 'APACHE 2.0':
      return "https://opensource.org/licenses/Apache-2.0";
    case 'GPL 3.0':
      return "https://opensource.org/licenses/GPL-3.0";
    case 'BSD 3':
      return "https://opensource.org/licenses/BSD-3-Clause";
    case 'None':
      return "";
  }
}

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
  - [How to Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License](#license)

## Installation
  
  ${data[0].instructions}

## Usage
       
  ${data[0].usage}

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
