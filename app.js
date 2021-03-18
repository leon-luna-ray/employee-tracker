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
    console.log(`✅ Db connected as id ${connection.threadId}\n`);

    // Invoke start app once connection is complete.
    appStart();
  });
  

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

    switch(data.action) {
        case 'View': console.log('View');
        switch (data.type) {
        
            case 'Employees': 
                viewEmployees();
                break;
        
            case 'Roles':
                viewRoles();
                break;

            case 'Departments':
                viewDepartments();
                break;
        }
        break;

        case 'Add': console.log('Add');
        switch (data.type) {
        
            case 'Employees': 
                addEmployees();
                break;
        
            case 'Roles':
                addRoles();
                break;
            case 'Departments':
                addDepartments();
                break;
        }
        break;

        case 'Update': updateRoles();
        break;

        case 'Exit': process.exit();
        break;

    }
});
}; 

function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        appStart();
      });
};

function viewRoles() {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        appStart();
      });
};

function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        appStart();
      });
};



function addEmployees() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employee\'s first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employee\'s last name?'
        }, 
    ]).then(data => {
        connection.query('INSERT INTO employee SET ?', {
            first_name: data.firstName,
            last_name: data.lastName,
            },  
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} employee added!\n`);

            appStart();
          })
    });
};



function addRoles() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title for this role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?'
        }
    ]).then(data => {
        connection.query('INSERT INTO role SET ?', {
            title: data.title,
            salary: data.salary,
        },  
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} role added!\n`);

            appStart();
          })
    });
};

function addDepartments() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the department name?'
        }
    ]).then(data => {
        connection.query('INSERT INTO department SET ?', {
            name: data.departmentName
        },  (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} department added!\n`);

            appStart();
          })
    });
};

function updateRoles() {
    
    connection.query('SELECT * FROM employee', (err, res) => {
            if (err) throw err  
            inquirer
            .prompt([
              {
                name: 'choice',
                type: 'rawlist',
                choices() {
                  const employeeArray = [];
                  res.forEach(({ first_name }) => {
                    employeeArray.push(first_name);
                  });
                  
                  return employeeArray;
                },
                message: 'Which employee would you like to update?',
              },
              
            ]).then(data => {
                connection.query('SELECT * FROM role', (err, res) => {})
            });
            // need to find a way to choose from the list of roles....
    });

    
};