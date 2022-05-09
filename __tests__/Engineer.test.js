const Engineer = require("../lib/Engineer");

test("checks if you can set github account info", () => {
    const test = "username";
    const engineer = new Engineer("Jan", 1, "test@gmail.com", test);
    expect(engineer.github).toBe(test);
});

test("checks if getGithub() returns value", () => {
    const test = "username";
    const engineer = new Engineer("Jan", 1, "test@gmail.com", test);
    expect(engineer.getGithub()).toBe(test);
});

test("checks if getRole() returns value", () => {
    const test = "Engineer";
    const engineer = new Engineer("Jan", 1, "test@gmail.com", "username");
    expect(engineer.getRole()).toBe(test);
});



