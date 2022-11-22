const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', 'github', and 'role' properties when called with the 'new' keyword", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should take the 'name', 'id', 'email', 'github', and 'role' when created", () => {
            const engineer = {
                name: "Rita",
                id: "32",
                email: "rita@email.net",
                github: "Rita212",
                role: 'Engineer',
            }

            const employeeObj = new Employee(engineer.name, engineer.id, engineer.email, engineer.role);
            const obj = new Engineer(employeeObj.name, employeeObj.id, employeeObj.email, engineer.github, engineer.role);

            expect(obj.name).toEqual(engineer.name);
            expect(obj.id).toEqual(engineer.id);
            expect(obj.email).toEqual(engineer.email);
            expect(obj.office).toEqual(engineer.office);
            expect(obj.role).toEqual(engineer.role);
        });
    });
})