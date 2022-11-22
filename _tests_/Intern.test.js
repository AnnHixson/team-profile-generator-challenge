const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', 'school', and 'role' properties when called with the 'new' keyword", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
            expect("role" in obj).toEqual(true);
        });

        it("should take the 'name', 'id', 'email', 'school', and 'role' when created", () => {
            const intern = {
                name: "Rita",
                id: "32",
                email: "rita@email.net",
                school: "University",
                role: 'Intern',
            }

            const employeeObj = new Employee(intern.name, intern.id, intern.email, intern.role);
            const obj = new Intern(employeeObj.name, employeeObj.id, employeeObj.email, intern.school, intern.role);

            expect(obj.name).toEqual(intern.name);
            expect(obj.id).toEqual(intern.id);
            expect(obj.email).toEqual(intern.email);
            expect(obj.office).toEqual(intern.office);
            expect(obj.role).toEqual(intern.role);
        });
    });
})