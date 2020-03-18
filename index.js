const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const chalk = require('chalk');
const api = require('./utils/API');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        message: "Enter your github username",
        name: "username",
    },
    {
        type: "password",
        message: "What is your password?",
        name: "password"
    },
    {
        type: "input",
        message: "what is a name of your project",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a short description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide date ",
        name: "date",
    },
    
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(chalk.red("searching..."));

        api
            .getUser(answers.username).then(({ data }) => {
            writeToFile("README.md", generateMarkdown({ ...answers, ...data }))

        });
    });
    
}


init();