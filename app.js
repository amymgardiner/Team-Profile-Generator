const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./lib/generateProfile');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team manager's name. (Required.)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the team mangers's name.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter team manager's employee ID. (Required.)",
            validate: employeeIdInput => {
              if (employeeIdInput) {
                return true;
              } else {
                console.log("Please enter the team mangers's ID.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter team manager's email address. (Required.)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter the team mangers's email address.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter team manager's office phone number.",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                  return true;
                } else {
                  console.log("Please enter the team mangers's office phone number.");
                  return false;
                }
              }
        },
    ])
    .then(managerInput => {
        const { name, employeeId, email, officeNumber } = managerInput;
    });
};

const menuPage = () => {
    console.log(`
    =================
    Add more employees to the team!
    In this section you can add engineers or interns to your team,
    or you can finish building your team.
    =================`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'moreMembers',
            message: "Would you like to add more members to your team?",
            choices: ['Yes', 'No']
        },
    ])
    .then(moreMembersInput => {
        let { moreMembers } = moreMembersInput

        if (moreMembers === 'Yes') {
            addEmployee();
        } else {
            return;
        }
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Choose your team member's role.",
            choices: ['Engineer', 'Intern']
        },
    ])
    .then(employeeRole => {
        let { role } = employeeRole

        if (role === 'Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's name. (Required.)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the team member's name.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter team member's employee ID. (Required.)",
            validate: employeeIdInput => {
              if (employeeIdInput) {
                return true;
              } else {
                console.log("Please enter the team member's ID.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter team member's email address. (Required.)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter the team member's email address.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter team member's GitHub username. (Required.)",
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Please enter the team member's GitHub username.");
                  return false;
                }
              }
        },
    ])
    .then(engineerInput => {
        let { name, role, employeeId, email, github } = engineerInput;

        menuPage();
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's name. (Required.)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the team member's name.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter team member's employee ID. (Required.)",
            validate: employeeIdInput => {
              if (employeeIdInput) {
                return true;
              } else {
                console.log("Please enter the team member's ID.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter team member's email address. (Required.)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter the team member's email address.");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter team member's school. (Required.)",
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter the team member's school.");
                  return false;
                }
              }
        },
    ])
    .then(internInput => {
        let { name, role, employeeId, email, school } = internInput;

        menuPage();
    })
};

addManager()
    .then(menuPage)
