const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.role = 'Manager'
    }

    // getRole() {
    //     return 'Manager'
    // }
}

module.exports = Manager;