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

  // instance method "calculateBonus"
  calculateBonus(multiplier) {
    // bonus = (manager's salary + total salary of all employees under them) * multiplier
    return (this.salary + this._totalSubSalary()) * multiplier;
  }

  // helper function "_totalSubSalary"
  _totalSubSalary() {
    let sum = 0; // set sum to 0
    this.employees.forEach(employee => { // for each employee
      sum += employee.salary; // add salary to sum
      if (employee instanceof Manager) { // if employee is an instance of Manager
        sum += employee._totalSubSalary(); // add recursive call to "_totalSubSalary()" to sum
      }
    });

    return sum;
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


const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000


/****************************** EXPORT ******************************/
module.exports = Manager; // export Manager class