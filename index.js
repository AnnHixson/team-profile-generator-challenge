const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Generate the webpage
const generateHTML = () => {}

// Prompts for Employee information
function getEmployeeInfo() {
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
        })
}

function getManagerInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'office',
                message: 'What is the team manager\'s office number?',
            },
        ])
        .then((data) => {
            const manager = new Manager(data.office);
            console.log(manager);
        })
        .then(runMenu())
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
            getEngineerInfo();
            break;
        case 'Add an intern':
            getInternInfo();
            break;
        case 'Finish building my team':
            generateHTML();
            break;
        default:
            console.log('Something went wrong in the useMenu switch');
    }
}

function getEngineerInfo() {
    getEmployeeInfo()
    .then(
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is this engineer\'s GitHub username?',
            },
        ])
        .then((data) => {
            const engineer = new Engineer(data.github);
            console.log(engineer);
        }))
    .then(runMenu())
}

function getInternInfo() {
    getEmployeeInfo()
    .then(
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is this intern\'s school?',
            },
        ])
        .then((data) => {
            const intern = new Intern(data.school);
            console.log(intern);
        }))
    .then(runMenu())
}

// Run the program
function runProgram() {
    console.log('Let\'s begin with the team manager.');
    getEmployeeInfo()
    .then(getManagerInfo())
}

runProgram()
























































// class Employee {
//     constructor() {
//         this.employeeName = '';
//     }

//     getName() {
//         return inquirer
//             .prompt([
//                 {
//                     type: 'input',
//                     name: 'name',
//                     message: 'What is the name of this employee?', 
//                 },
//             ])
//             .then(val => {
//                 const nameInput = this.employeeName.val.name;
                
//                 if(nameInput == 'undefined') {
//                     console.log("this isn't working")
//                 } else {
//                     console.log(`This is working.`)
//                 }
//                 console.log(nameInput);
//             })
//     }

//     getRole() {
//         return 'Employee'
//     }
// }

// const testEmployee = new Employee();
// testEmployee.getName();
// if(name == 'undefined') {
//     console.log("this isn't working")
// } else {
//     console.log(`This is working. The employee's name is ${testEmployee.employeeName}`)
// }