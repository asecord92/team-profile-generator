const inquirer = require('inquirer');
const { choices } = require('yargs');
const Manager = require('./lib/Manager');

const team = [];

function managerPrompt() {
    inquirer
    .prompt([{
        type:'text',
        name: 'name',
        message:"Manager Name"
    },
    {
        type:'text',
        name: 'id',
        message:"Please enter your employee ID:"
    },    
    {
        type:'text',
        name: 'email',
        message:"Please enter your email:"
    },
    {
        type:'text',
        name: 'officeNumber',
        message:"Please enter your office number:"
    }]
    )
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber)
        team.push(manager);
        console.log(team);
    });
    

};

function roleSelect() {
    inquirer
    .prompt([{
        type: 'list',
        name: 'role',
        message: 'What employee would you like to add?',
        choices: ['Engineer', 'Intern']
    }])
    .then(teamMember => {
        if (teamMember.role === 'Engineer') {
            engineerPrompt();
        }
    })
        
    
}

managerPrompt();






