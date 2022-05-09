const Manager = require("../lib/Manager");

test("checks if you can set office number", () => {
  const test = Math.random();
  const manager = new Manager("Jan", 1, "test@email.com", test);
  expect(manager.officeNumber).toBe(test);
});

test("checks if getOfficeNumber() returns value", () => {
  const test = Math.random();
  const manager = new Manager("Jan", 1, "test@gmail.com", test);
  expect(manager.getOfficeNumber()).toBe(test);
});

test("checks if getRole() returns Manager", () => {
  const test = "Manager";
  const manager = new Manager("Jan", 1, "test@gmail.com", 8);
  expect(manager.getRole()).toBe(test);
});