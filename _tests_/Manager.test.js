const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', 'office', and 'role' properties when called with the 'new' keyword", () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("office" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should take the 'name', 'id', 'email', 'office', and 'role' when created", () => {
            const manager = {
                name: "Rita",
                id: "32",
                email: "rita@email.net",
                office: "21",
                role: 'Manager',
            }

            const employeeObj = new Employee(manager.name, manager.id, manager.email, manager.role);
            const obj = new Manager(employeeObj.name, employeeObj.id, employeeObj.email, manager.office, manager.role);

            expect(obj.name).toEqual(manager.name);
            expect(obj.id).toEqual(manager.id);
            expect(obj.email).toEqual(manager.email);
            expect(obj.office).toEqual(manager.office);
            expect(obj.role).toEqual(manager.role);
        });
    });
})