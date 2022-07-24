const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./src/generateProfile');

// links lib pages of the team member profile class constructor functions
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// empty array for team members
const teamArray = [];

// start of node program - asks for manager information
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
            message: "Enter team manager's office number.",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                  return true;
                } else {
                  console.log("Please enter the team mangers's office number.");
                  return false;
                }
              }
        },
    ])
    .then(managerInput => {
        const { name, employeeId, email, officeNumber } = managerInput;

        const manager = new Manager (name, employeeId, email, officeNumber);

        teamArray.push(manager);
    });
};

// after manager is added, the next part of the node program asks if the team is finished being built or needs more team members
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
          writeFile();
        }
    })
};

// if more team members will be added, this asks if they're an intern or engineer
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

// if engineer was selected, this gets their information and then returns to the menu page
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
        let { name, employeeId, email, github } = engineerInput;

        let engineer = new Engineer (name, employeeId, email, github);
        
        teamArray.push(engineer);

        menuPage();
    })
}

// if intern was selected, this gets their information and then returns to the menu page
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
        let { name, employeeId, email, school } = internInput;

        let intern = new Intern (name, employeeId, email, school);

        teamArray.push(intern);

        menuPage();
    })
};

// function to generate the team profile
const writeFile = (data) => {
  fs.writeFile('./dist/index.html', generateProfile(teamArray), err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been successfully created!")
    }
  })
};

// function to initialize the node program, and to make sure manager runs first followed by the menu program
// which then is followed by the selection of the team member roles
// which is then followed by either intern or engineer input
addManager()
    .then(menuPage)