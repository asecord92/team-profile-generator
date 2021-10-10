const Manager = require('../lib/Manager')

test('creates a new employee as object', () => {
    const manager = new Manager('Adam', 1,'ats92@cox.net', 23);

    expect(manager.name).toBe('Adam');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining(manager.email.toString()))
    expect(manager.officeNumber).toEqual(expect.any(Number))

})