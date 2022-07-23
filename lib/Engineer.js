const Employee = require('./Employee');

// inherits the class from employee
class Enginner extends Employee {
    constructor (name, employeeId, email, github) {
        super (name, employeeId, email);

        this.github = github;
    }
    
    // gets github which isn't inherited through employee
    // manager and intern don't have github
    getGithub () {
        return this.github;
    }

    // get role is overriden to be engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Enginner; 