const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Amy', 42, 'amymgardiner@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Amy', 42, 'amymgardiner@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Amy', 42, 'amymgardiner@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Amy', 42, 'amymgardiner@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test('gets role of employee', () => {
    const employee = new Employee('Amy', 42, 'amymgardiner@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});