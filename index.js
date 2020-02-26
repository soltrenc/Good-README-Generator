const fs = require("fs");
const axios = require("axios");
const api = require("./utils/api");

const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter the title for your project: ",
        name: "title"
    },
    {
        type: "input",
        message: "Write a brief description of the project: ",
        name: "description"
    },
    {
        type: "input",
        message: "What is the installation process for the project: ",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage for this project: ",
        name: "usage"

    },
    {
        type: "input",
        message: "What licenses are applied for the project: ",
        name: "licenses"
    },
    {
        type: "input",
        message: "Please add any other contributors for the project: ",
        name: "credits"

    }
];

inquirer
    .prompt(questions)
    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl, {
            auth: {
                username: 'soltrenc',
                password: 'iNotlNN41!'
            }
        }).then(res => {
            console.log('res ', res)
            console.log(res.data.location)
            var profileStr = `
# Location
### ${res.data.location}
# Title
### ${res.data.title}
# Description
### ${res.data.description}
            `
            fs.writeFile("readme.md", profileStr, function (err) {
                if (err) {
                    throw err;
                }
                console.log(`Saved`);
            });
        })

    });

// function writeToFile(fileName, data) {
//         }

// function init() {

//         }

// init();
