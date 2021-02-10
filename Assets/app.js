const inquirer = require('inquirer');
const mysql = require('mysql');

// Greet and ask user what they would like to do
function appStart() {
    // // From maryus
    // // const answers = await promtpOptions();
    // // handleAnswers(answers);

    // const controller = {
    //     viewDepartment: displayDepartments,
    //     viewEmployees: displayEmployees,
    //     viewRoles: displayRoles
    // }

    // function handleAnswers(answers) {

    // };

    inquirer.prompt([
        {   type: 'list',
            name: 'action',
            message: 'Welcome to the employee tracker. Please select what you would like to do.',
            choices: ['View', 'Add', 'Update', 'Exit']
        }
]).then(data => {
    // Switch statement to run function based on the action use chose.

    switch(data.action) {
        case 'View': console.log('you chose view');
        break;

        case 'Add': console.log('you chose add');
        break;

        case 'Update': console.log('you chose update');
        break;

        case 'Exit': process.exit();
    }
});
}; // appStart

function view() {
    inquirer.prompt([]).then();
};

function add() {
    inquirer.prompt([]).then();
};

function update() {
    inquirer.prompt([]).then();
};

appStart();

// Task functions
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
