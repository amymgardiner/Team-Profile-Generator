const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, employeeId, email, school) {
        super (name, employeeId, email);

        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 