// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `(https://opensource.org/licenses/${license.replace(/\s+/g,'-').toLowerCase()})`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
     return renderLicenseBadge(license)+renderLicenseLink(license)
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
${renderLicenseSection(data.licenses)}
  
## Description
${data.discription}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
  
## Installation
\`\`\`md
${data.install}
\`\`\`
  
## Usage
\`\`\`md
${data.usage}
\`\`\`
  
## Contributing
${data.contribute}
  
## Reporting
\`\`\`md
${data.report}
\`\`\`
## License
${renderLicenseSection(data.licenses)}
  
## Questions
Please trough GitHub:
GitHub Profile https://github.com/${data.github}
  
Or using my email address:
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
