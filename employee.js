class Employee {
  // constructor function; input: name, salary, title, manager
  constructor(name, salary, title, manager) {
    this.name = name; // name property
    this.salary = salary; // salary property
    this.title = title; // title property

    // if manager arg is passed in, set manager property to manager; else, set to null
    if (manager) {
      this.manager = manager;
      manager.addEmployee(this); // dynamically add employee to manager's employees array
    } else {
      this.manager = null;
    }
  }

  calculateBonus(multiplier) {
    // bonus = (employee salary) * multiplier
    return this.salary * multiplier;
  }
}


/****************************** TESTS ******************************/
// const leo = new Employee('Leonardo', 90000, 'Ninja');
// console.log(leo);

/* Should log:
Employee {
    name: 'Leonardo',
    salary: 90000,
    title: 'Ninja',
    manager: null
}
*/


// const raph = new Employee('Raphael', 90000, 'Ninja');
// const donny = new Employee('Donatello', 85000, 'Grasshopper');

// console.log(raph.calculateBonus(0.25)); // => 22500
// console.log(donny.calculateBonus(0.15)); // => 12750


/****************************** EXPORT ******************************/
module.exports = Employee; // export Employee class