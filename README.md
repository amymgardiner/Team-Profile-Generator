# Team-Profile-Generator

## About

A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, I also wrote unit tests and ensured that all of them passed.

## What it does

It is a a command-line application that accepts user input. When the user is prompted for their team members and their information, then an HTML file is generated that displays a nicely formatted team roster based on that user input. This HTML file will be found in the "dist" folder, where a linked CSS file is already completed.

When viewing the created page, if the user clicks on an email address in the HTML, then their default email program opens and populates the TO field of the email with the address. Also, when the user clicks on the GitHub username, then that GitHub profile opens in a new tab.

When you start the application, you'll first be prompted to enter the team manager’s name, employee ID, email address, and office number. After you enter the team manager’s name, employee ID, email address, and office number, then you'll be presented with a menu with the option to add an engineer or an intern or to finish building your team.

If you select the engineer option, then you'll be prompted to enter the engineer’s name, ID, email, and GitHub username, and you will be taken back to the menu. If you select the intern option, then you'll be prompted to enter the intern’s name, ID, email, and school, and again you will be taken back to the menu. Once you devide to finish building your team, then you can exit the application, and the HTML is generated.

## How to use it

To use this program, you would first need to clone my GitHub repository:
(https://github.com/amymgardiner/Team-Profile-Generator)

If you don't already, you would also need to download and install Node.js. You can read how to do that here:
(https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

Once cloned, open up your command line terminal and go to the file containing the repository on your computer. Then type in the following command:

npm install

which installs the dependencies to the local node_modules folder. By default, npm install will install all modules listed as dependencies in package.json.

Finally, the application will be invoked by using the following command:

node index.js

## Example

An example of the finished team profile can be seen in the "dist" folder in my github repository.

Here is a video I made of myself using the program and the finished result shown in VS Code and on my GitHub repository.
