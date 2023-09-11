// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
  }
  return '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
This application is covered under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- ${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).  
You can also visit my [GitHub profile](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;
