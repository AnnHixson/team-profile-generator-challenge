const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Generate the webpage
// the h2 section should be created when the employee is added and added to an array to itterate through, so the right number of employees are added
const generateHTML = () => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <h1>This is my team</h1>
        <h2>${'name here'}</h2>
        <ul>
            <li>${'role here'}</li>
            <li>Email: ${'email here'}</li>
            <li>Employee ID: ${'id here'}</li>
            <li>${'Other info'}: ${'office, github, or school here'}</li>
        </ul>
    </body>
    </html>`
}

// // Prompts for Employee information
// function getEmployeeInfo() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: 'What is the name of this team member?',
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: 'What is this team member\'s employee ID?',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'What is this team member\'s email address?',
//             },
//         ])
//         .then((data) => {
//             const employee = new Employee(data.name, data.id, data.email);
//             console.log(employee);
//         })
// }

// function getManagerInfo() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'office',
//                 message: 'What is the team manager\'s office number?',
//             },
//         ])
//         .then((data) => {
//             const manager = new Manager(data.office);
//             console.log(manager);
//         })
//         .then(runMenu())
// }

// function runMenu() {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 name: 'selection',
//                 message: 'Add another team member or finish and generate your webpage:',
//                 choices: ["Add an engineer", "Add an intern", "Finish building my team"],
//             },
//         ])
//         .then((data) => {
//             useMenu(data);
//         })
// }

// function useMenu({ selection }) {
//     switch (selection) {
//         case 'Add an engineer':
//             getEngineerInfo();
//             break;
//         case 'Add an intern':
//             getInternInfo();
//             break;
//         case 'Finish building my team':
//             generateHTML();
//             break;
//         default:
//             console.log('Something went wrong in the useMenu switch');
//     }
// }

// function getEngineerInfo() {
//     getEmployeeInfo()
//     .then(
//         inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: 'What is this engineer\'s GitHub username?',
//             },
//         ])
//         .then((data) => {
//             const engineer = new Engineer(data.github);
//             console.log(engineer);
//         }))
//     .then(runMenu())
// }

// function getInternInfo() {
//     getEmployeeInfo()
//     .then(
//         inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What is this intern\'s school?',
//             },
//         ])
//         .then((data) => {
//             const intern = new Intern(data.school);
//             console.log(intern);
//         }))
//     .then(runMenu())
// }

// // Run the program
// function runProgram() {
//     console.log('Let\'s begin with the team manager.');
//     getEmployeeInfo()
//     .then(getManagerInfo())
// }

// runProgram()











const employee = {
    name: "Rita",
    id: "32",
    email: "rita@email.net",
    office: "21",
    github: "Rita212",
    school: "University",
    role: "",
}

const employeeObj = new Employee(employee.name, employee.id, employee.email);
const managerObj = new Manager(employeeObj.name, employeeObj.id, employeeObj.email, employee.office);
const engineerObj = new Engineer(employeeObj.name, employeeObj.id, employeeObj.email, employee.github);
const internObj = new Intern(employeeObj.name, employeeObj.id, employeeObj.email, employee.school);

console.log(employeeObj);
console.log(managerObj);
console.log(engineerObj);
console.log(internObj);
