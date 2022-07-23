const Engineer = require('../lib/Engineer');

// tests to see if all parts are inherited from employee, plus the additional github information
test('creates Engineer object', () => {
    const engineer = new Engineer('Amy', 42, 'amymgardiner@gmail.com', 'amymgardiner');

    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('Amy', 42, 'amymgardiner@gmail.com', 'amymgardiner');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// the employee getRole should be overridden to be engineer
test('gets role of engineer as engineer', () => {
    const engineer = new Engineer('Amy', 42, 'amymgardiner@gmail.com', 'amymgardiner');

    expect(engineer.getRole()).toEqual('Engineer');
});