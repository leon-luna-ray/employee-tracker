require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // db login
    password: process.env.DB_PASSWORD,
    database: 'employee_db',
  });

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);

    // Invoke start app once connection is complete.
    appStart();
  });



    const controller = {
        // viewDepartment: displayDepartments(),
        viewEmployees: displayEmployees()
        // viewRoles: displayRoles()
    }

    // function handleAnswers(answers) {

    // };
  

// Greet and ask user what they would like to do
function appStart() {

    inquirer.prompt([
        {   type: 'list',
            name: 'action',
            message: 'Welcome to the employee tracker. Please select what you would like to do.',
            choices: ['View', 'Add', 'Update', 'Exit']
        },
        {
            type: 'list',
            name: 'type',
            message: 'Select type',
            choices: ['Employees', 'Roles', 'Departments']
        }
]).then(data => {
    // Switch statement to run function based on the action use chose.

    switch(data.action.type) {
        case 'View': console.log('view employees worked')
        break;

        case 'Add': console.log('you chose add');
        break;

        case 'Update': console.log('you chose update');
        break;

        case 'Exit': process.exit();
    }
});
}; // appStart

    // // From maryus
    // const answers = await promtpOptions();
    // handleAnswers(answers);




// function view() {
//     inquirer.prompt([
//         {type: 'list',
//         name: 'action',
//         message: 'What would you like to view?',
//         choices: ['Departments', 'Roles', 'Employees', 'Exit']
//     }
//     ]).then(data => {
//         switch (data.action) {
//             case 'Departments': viewDepartments();
//                 break;
        
//             default:
//                 break;
//         }
//     });
// };

function displayEmployees() {
    // this is working for now
    console.log('it fired')
};

function add() {
    inquirer.prompt([]).then();
};

function update() {
    inquirer.prompt([]).then();
};

// Task functions
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
