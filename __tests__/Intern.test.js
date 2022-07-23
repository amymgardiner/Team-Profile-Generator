const Intern = require('../lib/Intern');

// tests to see if all parts are inherited from employee, plus the additional school information
test('creates Intern object', () => {
    const intern = new Intern ('Amy', 42, 'amymgardiner@gmail.com', 'SIUE');

    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const intern = new Intern ('Amy', 42, 'amymgardiner@gmail.com', 'SIUE');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

// the employee getRole should be overridden to be intern
test('gets role of engineer as engineer', () => {
    const intern = new Intern ('Amy', 42, 'amymgardiner@gmail.com', 'SIUE');

    expect(intern.getRole()).toEqual('Intern');
});