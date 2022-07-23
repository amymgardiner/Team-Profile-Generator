class Employee {
    // all employees will need to have name, id, and email information no matter their role
    constructor (name, employeeId, email) {
        this.name = name;
        this.employeeId = employeeId
        this.email = email
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.employeeId;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
};

module.exports = Employee;