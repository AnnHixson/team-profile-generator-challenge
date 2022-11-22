const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;