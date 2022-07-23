const Manager = require('../lib/Manager');

// tests to see if all parts are inherited from employee, plus the additional office phone number
test('creates Manager object', () => {
    const manager = new Manager ('Amy', 42, 'amymgardiner@gmail.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's office number", () => {
    const manager = new Manager ('Amy', 42, 'amymgardiner@gmail.com', 4);

    expect(manager.getNumber()).toEqual(expect.any(Number));
});

// the employee getRole should be overridden to be manager
test('gets role of engineer as engineer', () => {
    const manager = new Manager ('Amy', 42, 'amymgardiner@gmail.com', 4);

    expect(manager.getRole()).toEqual('Manager');
});