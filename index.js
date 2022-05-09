const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

profilesData = [];

const enterProfile = (value) => {
    console.log(value)

    if (value == 'Engineer'){
            return inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: `${value}'s name`,
    }, {
        name: 'id',
        type: 'input',
        message: `${value}'s employee ID`
    }, {
        name: 'email',
        type: 'input',
        message: `${value}'s email address`
    }, {
        name: 'github',
        type: 'input',
        message: `${value}'s github username`
    },{
        name: 'office',
        type: 'input',
        message: `${value}'s office number`
    }, {
        name: 'addProfileResponse',
        type: 'list', 
        message: "Would you like to add a profile for and engineer or intern?",
        choices: ['Engineer', 'Intern', 'No, exit application'],
    }])
    .then((answers) => {
        answers.role = value;
        profilesData.push(answers)
        //console.log(`\nMy age is ${answers.age} and I live in ${answers.country}.\n`);
        if (answers.addProfileResponse === 'Engineer') {
            console.log(`You've entered info for ${answers.name}. Now enter the next profile information.`)
            return enterProfile('Engineer');
        } else if (answers.addProfileResponse === 'Intern') {
            console.log(`You've entered info for ${answers.name}. Now enter the next profile information.`)
            return enterProfile('Intern');
        } else {
            console.log(`You've entered info for ${answers.name}.`)
        }
    })
    

    } else{

    return inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: `${value}'s name`,
    }, {
        name: 'id',
        type: 'input',
        message: `${value}'s employee ID`
    }, {
        name: 'email',
        type: 'input',
        message: `${value}'s email address`
    }, {
        name: 'office',
        type: 'input',
        message: `${value}'s office number`
    }, {
        name: 'addProfileResponse',
        type: 'list', 
        message: "Would you like to add a profile for and engineer or intern?",
        choices: ['Engineer', 'Intern', 'No, exit application'],
    }])
    .then((answers) => {
        answers.role = value;
        profilesData.push(answers)
        //console.log(`\nMy age is ${answers.age} and I live in ${answers.country}.\n`);
        if (answers.addProfileResponse === 'Engineer') {
            console.log(`You've entered info for ${answers.name}. Now enter the next profile information.`)
            return enterProfile('Engineer');
        } else if (answers.addProfileResponse === 'Intern') {
            console.log(`You've entered info for ${answers.name}. Now enter the next profile information.`)
            return enterProfile('Intern');
        } else {
            console.log(`You've entered info for ${answers.name}.`)
        }
    })
    }
}

enterProfile("Manager")
    .then(profilesData => {
    const pageHTML = generatePage(profilesData);
    fs.writeFile('./src/index.html', pageHTML, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out index.html in the src directory to see it!');
    });
    });



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I decide to finish building my team


// to do
// look for tests
// look into what classes are