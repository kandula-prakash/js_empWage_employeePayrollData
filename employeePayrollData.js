class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;
  
    // constructor
    constructor(...params) {
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.startDate = params[4];
    }
  
    // getter and setter methods for name
    get name() { return this._name; }
    set name(name) {
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if (nameRegex.test(name))
        this._name = name;
      else throw 'Name is Incorrect!';
    }
  
    // getter and setter methods for id
    get id() { return this._id; }
    set id(id) {
      let idRegex = RegExp('^[1-9][0-9]*$');
      if (idRegex.test(id))
        this._id = id;
      else throw 'Invalid id!';
    }
  
    // getter and setter methods for salary
    get salary() { return this._salary; }
    set salary(salary) {
      let salaryRegex = RegExp('^[0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*$');
      if (salaryRegex.test(salary))
        this._salary = salary;
      else throw 'Invalid salary!';
    }
  
    // getter and setter methods for gender
    get gender() { return this._gender; }
    set gender(gender) {
      let genderRegex = RegExp('^[M F]{1}$');
      if (genderRegex.test(gender))
        this._gender = gender;
      else throw 'Invalid gender!';
    }
  
    // method
    toString() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const empDate = !this.startDate === undefined ? "undefined" : this.startDate.toLocalDateString("en-US", options);
      return "id=" + this.id + ",name=" + this.name + ",salary=" + this.salary + ",gender=" + this.gender + ",start date=" + this.startDate;
    }
  }
  
  let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date());
  console.log(employeePayrollData.toString());
  
  try {
    employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());
  } catch (e) {
    console.error(e);
  }
  
  try {
    employeePayrollData.id = 2;
    console.log(employeePayrollData.toString())
  } catch (e) {
    console.error(e);
  }
  
  try {
    employeePayrollData.salary = 40000;
    console.log(employeePayrollData.toString())
  } catch (e) {
    console.error(e);
  }
  
  try {
    employeePayrollData.gender = "M";
    console.log(employeePayrollData.toString())
  } catch (e) {
    console.error(e);
  }