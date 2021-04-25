// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);
const questions = () =>{
    return inquirer.prompt([
    {
        type: "input",
        message:"What is the name of the project?",
        name: 'title',
    },
    {
        type:'input',
        message:"What is the Project for?",
        name:'discription',
    },
    {
        type:'input',
        message:"how do you use the app?",
        name:'usage',
    },
    {
        type:"input",
        message:"Are there any install instructions?",
        name:"install",
    },
    {
        type:'input',
        message:"Did anyone contribute to this project?",
        name:"contribute",
    },
    {
        type:'input',
        message:"How do you report issues?",
        name:"report",
    },
    {
        type:'input',
        message:"What is your Github username?",
        name:"Github",
    },
    {
        type:'input',
        message:"What is your email address?",
        name:"email",
    },
    {
        type: 'list',
        message: 'Choose the license for your project.',
        name: 'licenses',
        choices: ['ISC', 'MIT', 'Apache 2.0', 'Boost 1.0','GPL 3.0'],
    }]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// }

// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
