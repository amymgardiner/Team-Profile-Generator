const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./lib/generateProfile');

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
    ]);
};

addManager()
