const inquirer = require('inquirer');
const fs = require('fs');
const generateProfile = require('./lib/generateProfile');

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Enter team manager's name. (Required.)",
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter the team mangers's name.");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: "Enter team manager's ID. (Required.)",
        validate: managerIdInput => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter the team mangers's ID.");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter team manager's email address. (Required.)",
        validate: managerEmailInput => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter the team mangers's email address.");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "Enter team manager's office phone number.",
        validate: managerNumberInput => {
            if (managerNumberInput) {
              return true;
            } else {
              console.log("Please enter the team mangers's office phone number.");
              return false;
            }
          }
    },
]