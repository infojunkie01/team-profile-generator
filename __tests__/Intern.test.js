const Intern = require("../lib/Intern");

test("check if you can set school info", () => {
    const test = "InternSchool";
    const intern = new Intern("Jan", 1, "test@gmail.com", test);
    expect(intern.school).toBe(test);
});

test("check if getSchool() returns value", () => {
    const test = "InternSchool";
    const intern = new Intern("Jan", 1, "test@gmail.com", test);
    expect(intern.getSchool()).toBe(test);
});

test("check if getRole() returns value", () => {
    const test = "Intern";
    const intern = new Intern("Jan", 1, "test@gmail.com", "InternSchool");
    expect(intern.getRole()).toBe(test);
});

