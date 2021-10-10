const inquirer = require('inquirer');
const { choices } = require('yargs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        message:"Please enter their employee ID:"
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
        roleSelect();
    });
    

};

function roleSelect() {
    inquirer
    .prompt([{
        type: 'list',
        name: 'role',
        message: 'What employee would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish']
    }])
    .then(teamMember => {
        if (teamMember.role === 'Engineer') {
            engineerPrompt();
        }else if (teamMember.role === 'Intern') {
            internPrompt();
        }
    }) 
}

function engineerPrompt() {
    inquirer.prompt([
        {
            type:'text',
            name: 'name',
            message:"Intern Name"
        },
        {
            type:'text',
            name: 'id',
            message:"Please enter their employee ID:"
        },    
        {
            type:'text',
            name: 'email',
            message:"Please enter their email:"
        },
        {
            type: 'text',
            name: 'github',
            message: 'Please enter their github username'
        }])
    .then(({ name, id, email, github }) =>{
        const engineer = new Intern(name, id, email, github)
        team.push(engineer);
        roleSelect();

    })
}

function internPrompt() {
    inquirer.prompt([
        {
            type:'text',
            name: 'name',
            message:"Intern Name"
        },
        {
            type:'text',
            name: 'id',
            message:"Please enter your employee ID:"
        },    
        {
            type:'text',
            name: 'email',
            message:"Please enter their email:"
        },{
            type: 'text',
            name: 'school',
            message: 'Please enter what school they are studying at:'
        }])
    .then(({ name, id, email, school }) =>{
        const intern = new Intern(name, id, email, school)
        team.push(intern);
        roleSelect();

    })
}
managerPrompt();






