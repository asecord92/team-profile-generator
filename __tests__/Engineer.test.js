const Engineer = require('../lib/Engineer')

test('creates a new engineer as object', () => {
    const engineer = new Engineer('Adam', 1,'ats92@cox.net', 'asecord92');

    expect(engineer.name).toBe('Adam');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));
    

})