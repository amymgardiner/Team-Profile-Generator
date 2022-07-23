const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Amy', '42', 'amymgardiner@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});