const Employee = require('./Employee');

// inherits the class from employee
class Manager extends Employee {
    constructor (name, employeeId, email, officeNumber) {
        super (name, employeeId, email)

        this.officeNumber = officeNumber
    }

    // gets office number which isn't inherited through employee
    // engineer and intern don't have office number
    getNumber () {
        return this.officeNumber;
    }

    // get role is overriden to be manager
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;