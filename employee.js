class Employee {
  // constructor function; input: name, salary, title, manager
  constructor(name, salary, title, manager) {
    this.name = name; // name property
    this.salary = salary; // salary property
    this.title = title; // title property
    // if manager arg is passed in, set manager property to manager; else, set to null
    manager ? this.manager = manager : this.manager = null;
  }
}


/****************************** TESTS ******************************/
const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)


/****************************** EXPORT ******************************/
module.exports = Employee; // export Employee class