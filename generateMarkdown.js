// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
    // Checks if the license variable is falsy (undefined, null, or an empty string) or set to "None".
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  //If a valid license is provided, returns a Markdown image tag with using markdown syntax.
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }
  return `This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`;
  // If a valid license is provided, it returns clickable link to license.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }
  return `## License\n\n${renderLicenseLink(license)}`;
  // Generates the License section of the README file, including the header ##, line breaks, and the clickable license link.
}

// TODO: Create a function to generate markdown for README
// dynamically insterted readme template
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}

  ## Questions
  If you have any questions, please contact me at [${data.email}](mailto:${
    data.email
  }).
  You can also find my projects at [GitHub - ${
    data.github
  }](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
