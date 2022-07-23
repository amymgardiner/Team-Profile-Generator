const Employee = require('./Employee');

// inherits the class from employee
class Intern extends Employee {
    constructor (name, employeeId, email, school) {
        super (name, employeeId, email);

        this.school = school;
    }

    // gets school which isn't inherited through employee
    // engineer and manager don't have school
    getSchool () {
        return this.school;
    }

    // get role is overriden to be intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 