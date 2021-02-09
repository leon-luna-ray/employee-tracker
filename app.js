const inquirer = require('inquirer');
const mysql = require('mysql');

// Greet and ask user what they would like to do
function appStart() {
    inquirer.prompt([
        {   type: 'list',
            name: 'action',
            message: 'Please select what you would like to do.',
            choices: ['View', 'Add', 'Update', 'Exit']
        }
]).then(data => {
    // Switch statement to run function based on the action use chose.
    console.log(data.action)

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

appStart();

// Task functions
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
