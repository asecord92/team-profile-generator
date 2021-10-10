const Intern = require('../lib/Intern')

test('creates a new intern as object', () => {
    const intern = new Intern('Adam', 1,'ats92@cox.net', 'Santa Clara');

    expect(intern.name).toBe('Adam');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining(intern.email.toString()));
    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));

})