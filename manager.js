const Employee = require("./employee");

class Manager extends Employee {
  // constructor function; input: name, salary, title, manager
  constructor(name, salary, title, manager) {
    super(name, salary, title, manager); // super function; input: name, salary, title, manager
    this.employees = []; // set employees property to empty array
  }

  // instance method "addEmployee"; input: Employee instance
  addEmployee(employee) {
    this.employees.push(employee); // add Employee instance to Manager instance's employees array
  }
}


/****************************** TESTS ******************************/
// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log(splinter);

/* should log:
Manager {
  name: 'Splinter',
  salary: 100000,
  title: 'Sensei',
  manager: null, 
  employees: []
}
*/

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log('Before: ', splinter);

// const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// console.log('After: ', splinter);

/* should log:
Before:  Manager {
  name: 'Splinter',
  salary: 100000,
  title: 'Sensei',
  manager: null,
  employees: []
}

After:  Manager {
  name: 'Splinter',
  salary: 100000,
  title: 'Sensei',
  manager: null,
  employees: [
    Employee {
      name: 'Leonardo',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    },
    Employee {
      name: 'Michelangelo',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    },
    Employee {
      name: 'Donatello',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    },
    Employee {
      name: 'Raphael',
      salary: 90000,
      title: 'Ninja',
      manager: [Circular]
    }
  ]
}
*/


/****************************** EXPORT ******************************/
module.exports = Manager; // export Manager class