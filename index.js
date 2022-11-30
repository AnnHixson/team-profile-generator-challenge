const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let selectRole;

// Generate the webpage
const generateManagerHTML = (manager) => {
    return `<h2>${manager.name}</h2>
<h3>${manager.role}</h3>
<ul>
<li>${manager.id}</li>
<li>${manager.email}</li>
<li>${manager.office}</li>
</ul>`
}

const generateEngineerHTML = (engineer) => {
    return `<h2>${engineer.name}</h2>
<h3>${engineer.role}</h3>
<ul>
<li>${engineer.id}</li>
<li>${engineer.email}</li>
<li>${engineer.github}</li>
</ul>`
}

const generateInternHTML = (intern) => {
    return `<h2>${intern.name}</h2>
<h3>${intern.role}</h3>
<ul>
<li>${intern.id}</li>
<li>${intern.email}</li>
<li>${intern.school}</li>
</ul>`
}

// Prompts for Employee information
function getEmployeeInfo(selectRole) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of this team member?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this team member\'s employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this team member\'s email address?',
            },
        ])
        .then((data) => {
            const employee = new Employee(data.name, data.id, data.email);
            console.log(employee);
            if (selectRole === "Add an engineer") {
                getEngineerInfo(employee);
            } else if (selectRole === "Add an intern") {
                getInternInfo(employee);
            } else {
                getManagerInfo(employee);
            }
        })
}

function getManagerInfo(employee) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'office',
                message: 'What is the team manager\'s office number?',
            },
        ])
        .then((data) => {
            const manager = new Manager(employee.name, employee.id, employee.email, data.office);
            console.log(manager);
            const managerHTMLContent = generateManagerHTML(manager);
            fs.appendFile('example.html', managerHTMLContent, (err) =>
            err ? console.error(err) : console.log('Commit logged!'));
            runMenu();
        })
}

function runMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'Add another team member or finish and generate your webpage:',
                choices: ["Add an engineer", "Add an intern", "Finish building my team"],
            },
        ])
        .then((data) => {
            useMenu(data);
        })
}

function useMenu({ selection }) {
    switch (selection) {
        case 'Add an engineer':
            selectRole = 'Add an engineer';
            getEmployeeInfo(selectRole);
            break;
        case 'Add an intern':
            selectRole = 'Add an intern';
            getEmployeeInfo(selectRole);
            break;
        case 'Finish building my team':
            const closingHTMLContent = 
            `</body>
            </html>`;
            fs.appendFile('example.html', closingHTMLContent, (err) =>
            err ? console.error(err) : console.log('Tada!'));
            break;
        default:
            console.log('Something went wrong in the useMenu switch');
    }
}

function getEngineerInfo(employee) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is this engineer\'s GitHub username?',
            },
        ])
        .then((data) => {
            const engineer = new Engineer(employee.name, employee.id, employee.email, data.github);
            console.log(engineer);
            const engineerHTMLContent = generateEngineerHTML(engineer);
            fs.appendFile('example.html', engineerHTMLContent, (err) =>
            err ? console.error(err) : console.log('Commit logged!'));
            runMenu();
        })
}

function getInternInfo(employee) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is this intern\'s school?',
            },
        ])
        .then((data) => {
            const intern = new Intern(employee.name, employee.id, employee.email, data.school);
            console.log(intern);
            const internHTMLContent = generateInternHTML(intern);
            fs.appendFile('example.html', internHTMLContent, (err) =>
            err ? console.error(err) : console.log('Commit logged!'));
            runMenu();
        })
}

// Run the program
function runProgram() {
    const openingHTMLContent = 
    `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
        </head>
        <body>
        <h1>This is my team</h1>`;
    fs.writeFile('example.html', openingHTMLContent, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
    console.log('Let\'s begin with the team manager.');
    getEmployeeInfo();
};

runProgram();
