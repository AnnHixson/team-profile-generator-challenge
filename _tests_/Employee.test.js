const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', and 'role' properties when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should set 'name', 'id', 'email', and 'role' when created", () => {
            const employee = {
                name: "Rita",
                id: "32",
                email: "rita@email.net",
                role: 'Employee',
            }

            const obj = new Employee(employee.name, employee.id, employee.email, employee.role);

            expect(obj.name).toEqual(employee.name);
            expect(obj.id).toEqual(employee.id);
            expect(obj.email).toEqual(employee.email);
            expect(obj.role).toEqual(employee.role);
        });
    });
})