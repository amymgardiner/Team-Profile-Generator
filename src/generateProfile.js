const generateProfile = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('');
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};

// generateProfile will create this as an employee card, if there is a manager (which there always will be)
const generateManager = function(manager) {
    return `
    <div class="container">
            <div class="card">
                <div class="card-header">
                    <h2>Manager</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${manager.name}</li>
                        <li class="list-group-item">Employee ID: ${manager.employeeId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>`;
};

// generateProfile will create this as an employee card, if there is an engineer
const generateEngineer = function(engineer) {
    return `
    <div class="container">
    <div class="card">
        <div class="card-header">
            <h2>Engineer</h2>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${engineer.name}</li>
                <li class="list-group-item">Employee ID: ${engineer.employeeId}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
</div>`;
};

// generateProfile will create this as an employee card, if there is an intern
const generateIntern = function(intern) {
    return `
    <div class="container">
            <div class="card">
                <div class="card-header">
                    <h2>Intern</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${intern.name}</li>
                        <li class="list-group-item">Employee ID: ${intern.employeeId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>`;
};

// main page html with section to add any employee cards generated from generateProfile
// the css page is already linked so we don't generate that since it will always live in the dist folder and never change
const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="stlye.css">
    <title>Team Profile</title>
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    
    <main>
    ${employeeCards}
    </main>
    </body>
    </html>`;
};

// link back to index.js
module.exports = generateProfile;