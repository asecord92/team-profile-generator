const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/pagetemplate')

const teamArray = [];

function managerPrompt() {
    return inquirer
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
        teamArray.push(manager);
        roleSelect();
    });
    

};



function engineerPrompt() {
    return inquirer.prompt([
        {
            type:'text',
            name: 'name',
            message:"Engineer Name"
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
        const engineer = new Engineer(name, id, email, github)
        teamArray.push(engineer);
        roleSelect();

    })
}

function internPrompt() {
    return inquirer.prompt([
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
        teamArray.push(intern);
        roleSelect();

    })
}

function roleSelect() {
    return inquirer
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
        }else if (teamMember.role === 'Finish') {
             createPage(teamArray);
        }
        
        
    }) 
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
    
        console.log("Team Page Successfully Created!")
    })
}; 
function createPage(teamArray) {
     const pageLayout = generateTeam(teamArray)
     writeToFile('./dist/index.html', pageLayout)
     
    
}

managerPrompt();






