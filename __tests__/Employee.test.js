const Employee = require("../lib/Employee");

test("check if you can set name", () => {
    const test = "Jan";
    const employee = new Employee(test, 1, "test@gmail.com");
    expect(employee.name).toBe(test);
});

test("check if getName() returns value", () => {
    const test = "Jan";
    const employee = new Employee(test, 1, "test@gmail.com");
    expect(employee.getName()).toBe(test);
});

test("check if you can set id", () => {
    const test = Math.random();
    const employee = new Employee("Jan", test, "test@gmail.com");
    expect(employee.id).toBe(test);
});

test("check if getId() returns value", () => {
    const test = Math.random();
    const employee = new Employee("Jan", test, "test@gmail.com");
    expect(employee.getId()).toBe(test);
});

test("check if you can set email", () => {
    const test = "test@gmail.com";
    const employee = new Employee("Jan", 1, test);
    expect(employee.email).toBe(test);
});

test("check if getEmail() returns value", () => {
    const test = "test@gmail.com";
    const employee = new Employee("Jan", 1, test);
    expect(employee.getEmail()).toBe(test);
});

test("check if getRole() returns value", () => {
    const test = "Employee";
    const employee = new Employee("Jan", 1, "test@gmail.com");
    expect(employee.getRole()).toBe(test);
});

