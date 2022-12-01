const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let selectRole;

// Generate the webpage
const generateManagerHTML = (manager) => {
    return `<div class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card border border-dark">
                    <h3 class="card-header bg-info text-white border-bottom border-dark">
                        ${manager.name}
                    </h3>
                    <div class="card-body">
                        <h4 class="card-title">${manager.role}</h4>
                        <ul class="card-text list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
                            <li class="list-group-item">Office number: ${manager.office}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
}

const generateEngineerHTML = (engineer) => {
    return `<div class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card border border-dark">
                    <h3 class="card-header bg-info text-white border-bottom border-dark">
                        ${engineer.name}
                    </h3>
                    <div class="card-body">
                        <h4 class="card-title">${engineer.role}</h4>
                        <ul class="card-text list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}"  class="card-link">${engineer.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `
}

const generateInternHTML = (intern) => {
    return `<div class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card border border-dark">
                    <h3 class="card-header bg-info text-white border-bottom border-dark">
                        ${intern.name}
                    </h3>
                    <div class="card-body">
                        <h4 class="card-title">${intern.role}</h4>
                        <ul class="card-text list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}"  class="card-link">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
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
            fs.appendFile('index.html', managerHTMLContent, (err) =>
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
            `</section>
            </div>
            </section>
            </main>
            </body>
            </html>
            `;
            fs.appendFile('index.html', closingHTMLContent, (err) =>
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
            fs.appendFile('index.html', engineerHTMLContent, (err) =>
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
            fs.appendFile('index.html', internHTMLContent, (err) =>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="container-fluid bg-dark text-light mb-5 p-3">
            <div class="d-flex align-items-center justify-content-center">
                <h1>My Team</h1>
            </div>
        </header>
    
        <main class="container">
            <section class="row">
                <div class="col-12 col-md-12">      
                    <section class="row justify-content-around">
                      `;
    fs.writeFile('index.html', openingHTMLContent, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
    console.log('Let\'s begin with the team manager.');
    getEmployeeInfo();
};

runProgram();
