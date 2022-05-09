const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const profilesData = [];
const profilesHtml = [];


const enterProfile = (role) => {
    if (role == "Manager") {
        otherInfo = {
            name: 'officeNumber',
            type: 'input',
            message: `${role}'s office number`
        }
    } else if (role == "Engineer") {
        otherInfo = {
            name: 'github',
            type: 'input',
            message: `${role}'s Github username`
        }
    } else if (role == "Intern") {
        otherInfo = {
            name: 'school',
            type: 'input',
            message: `${role}'s school name`
        }
    } else {
    }
    return inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: `${role}'s name`,
    }, {
        name: 'id',
        type: 'input',
        message: `${role}'s employee ID`
    }, {
        name: 'email',
        type: 'input',
        message: `${role}'s email address`
    },
        otherInfo
    ]).then((answers) => {
        if (role == "Manager") {
            newProfile = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            profilesData.push(newProfile);
            profilesHtml.push(addGeneralProfileHtml(newProfile))
            askAddMember()

        } else if (role == "Engineer") {
            newProfile = new Engineer(answers.name, answers.id, answers.email, answers.github);
            profilesData.push(newProfile);
            profilesHtml.push(addGeneralProfileHtml(newProfile))
            askAddMember()
        } else if (role == "Intern") {
            newProfile = new Intern(answers.name, answers.id, answers.email, answers.school);
            profilesData.push(newProfile);
            profilesHtml.push(addGeneralProfileHtml(newProfile))
            askAddMember()
        } else {

        }
    })
}

// Asks user if they want to add another member that's an engineer or intern
function askAddMember() {
    inquirer.prompt([{
        name: 'addProfileResponse',
        type: 'list',
        message: "Would you like to add another profile for an engineer or intern?",
        choices: ['Engineer', 'Intern', 'No, exit application'],
    }])
        .then((answer) => {
            if (answer.addProfileResponse == 'Engineer' || answer.addProfileResponse == 'Intern') {
                enterProfile(answer.addProfileResponse)
            } else {
                console.log("You've entered in all team member profiles.")
                createHtml(profilesHtml);
            }
        })
}

// Function to create html code for each profile
addGeneralProfileHtml = profile => {
    const name = profile.getName();
    const role = profile.getRole();
    const id = profile.getId();
    const email = profile.getEmail();

    if (profile instanceof Manager) {
        const officeNumber = profile.getOfficeNumber();
        html = `<p class="bg-white p-2 border border-light">Office #: ${officeNumber}</p>`
    } else if (profile instanceof Engineer) {
        const github = profile.getGithub();
        html = `<p class="bg-white p-2 border border-light">Github: <a href = "https://github.com/${github}">${github}</a></p>`
    } else if (profile instanceof Intern) {
        const school = profile.getSchool();
        html = `<p class="bg-white p-2 border border-light">School: ${school}</p>`
    } else {
    }
    return `
    <div class="profile-card shadow-sm mb-4">
      <div class="profile-name-role p-3">
        <h4 class="mb-0">${name}, <span class="font-weight-light">${role}</span></h4>
      </div>
      <div class="profile-other-info p-3">
        <p class="bg-white p-2 border border-light">ID: ${id}</p>
        <p class="bg-white p-2 border border-light">Email: <a href = "mailto: ${email}">${email}</a></p>
        ${html}
      </div>
    </div>
  `;
}

// Function to create base html code
baseHtml = profilesHtml => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Portfolio</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
      <header class="text-center">
          <h1 class="">My Team</h1>
      </header>
  
      <main class="container my-5">
          <section class="my-3" id="profile-section">
            ${profilesHtml.join('')}
          </section>  
      </main>
  
    </body>
    </html>
    `;
};

// Function to write html page
createHtml = profilesHtml => {
    const pageHTML = baseHtml(profilesHtml);
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out index.html in the dist directory to see it!');
    });
}

// Runs code to ask for user input. Starts with asking user to input manager info, then options to input other employee info follows
enterProfile("Manager")

