const { test, expect } = require('@jest/globals');

const Employee = require('../lib/Employee');

test('creates a new employee as object', () => {
    const employee = new Employee('Adam', 1,'ats92@cox.net', 'Employee');

    expect(employee.name).toBe('Adam');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()))
    expect(employee.role).toEqual(expect.stringContaining(employee.role.toString()))

})