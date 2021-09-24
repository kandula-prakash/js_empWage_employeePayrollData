//variables
const IS_ABSENT =0
let empCheck = Math.flore(Math.random()*10) % 2;
if (empCheck == IS_ABSENT){
    console.log("uc1 - Employee is ABSENT.");
}else {
    console.log("uc1 - Employee ie PRESENT")
}



//uc2 switch case
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;


let empHrs = 0;
let empWage;
let empCheck;
let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyHrsAndWageArr = new Array();
var empDailyHrsMAp = new Map();
//function
function getWorkingHours(){
let empCheck = Math.floor(Math.random() * 10 % 3);

switch (empCheck) {
  case IS_PART_TIME:
    console.log("Employee is present: part time");
    empHrs = PART_TIME_HOURS;
    break;

  case IS_FULL_TIME:
    console.log("Employee is present: full time");
    empHrs = FULL_TIME_HOURS;
    break;

  default:
    console.log("Employee is absent");
    empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee wage: " + empWage);

//uc3
function getWorkingHours() {
    let empCheck = Math.floor(Math.random() * 10 % 3);
    switch (empCheck) {
      case IS_PART_TIME:
        return PART_TIME_HOURS;
  
      case IS_FULL_TIME:
        return FULL_TIME_HOURS;
  
      default:
        return 0;
    }
  }
  
  // function call
  empHrs = getWorkingHours();
  empWage = empHrs * WAGE_PER_HOUR;
  console.log("Employee wage: " + empWage);

  //UC4
  for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
  }
  
  empWage = totalEmpHrs * WAGE_PER_HOUR;
  console.log("Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

//uc5
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck =Math.floor(Math.random()*10) %3;
    totalEmpHrs += getWorkingHours(empCheck);
}

empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);



//uc6 Arryas

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;

}
while (totalEmpHrs <= MAX_HRS_PER_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
  
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
  
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calWageBased_RateHr(empHrs));
  }
  
  empWage = calWageBased_RateHr(totalEmpHrs);
  console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

//uc7

function calWageBased_RateHr(empHrs) {
    return empHrs * WAGE_PER_HOUR;
  }
  
  while (totalEmpHrs <= MAX_HRS_PER_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
  
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
  
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calWageBased_RateHr(empHrs));
  }
  
  function calTotalWage_dailyWage(dailyWage) {
    totalEmpWage += dailyWage;
  }
  
  function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
  }
  
  empDailyWageArr.forEach(calTotalWage_dailyWage);
  console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);
  console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));
  
  // UC 7B - Show the day along with daily wage using Array map helper function
  let currentDay = 0;
  function mapDayWithWage(dailyWage) {
    currentDay++;
    return currentDay + " = " + dailyWage;
  }
  
  let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
  console.log("Daily Wage Map: " + mapDayWithWageArr);
  
  //UC 7C - Shows Days when Full time wage of 160 were earned
  function getAll_fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  
  let fullDayWageArr = mapDayWithWageArr.filter(getAll_fullTimeWage);
  console.log("Daily Wage Filter When Fulltime Wage Earned: " + fullDayWageArr);
  
  //UC 7D - Find the first occurrence when Full Time Wage was earned using find function
  function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  
  let firstFullTime = mapDayWithWageArr.find(findFulltimeWage);
  console.log("First time Fulltime wage was earned on Day: " + firstFullTime);
  
  
  //UC 7E - Check if Every Element of Full Time Wage is truly holding Full time Wage
  function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  
  let isFullTime = fullDayWageArr.every(isAllFulltimeWage);
  console.log("Check All Elements have Full Time Wage: " + isFullTime);
  
  //UC 7F - Check if there is any Part Time Wage
  function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
  }
  
  let isPartTime = mapDayWithWageArr.some(isAnyPartTimeWage);
  console.log("Check If Any Part Time Wage: " + isPartTime);
  
  
  //UC 7G - Find the number of Days the employee worked.
  function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
  }
  
  let workedDays = empDailyWageArr.reduce(totalDaysWorked);
  console.log("Number of Days Emp Worked: " + workedDays);
//uc8
function calWageBased_RateHr(empHrs) {
    return empHrs * WAGE_PER_HOUR;
  }
  
  while (totalEmpHrs <= MAX_HRS_PER_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
  
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
  
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calWageBased_RateHr(empHrs));
    empDailyWageMap.set(totalWorkingDays, calWageBased_RateHr(empHrs));
  }
  
  function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
  }
  
  console.log("Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0))

const MAX_HRS_IN_MONTH =260;
const NUM_OF_WORKING_DAYS=30;
let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyW






//uc9 Arrow Function

const findTotal = (totalVal,dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMAp.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage >0).reduce(findTotal,0);
console.log("uc9A - Emp Wage with Arrow.:" + "total Hours:" + totalHours + "total Wages:" + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMAp.forEach(  (value, key, map) =>{
    if (value ==8) fullWorkingDays.push(key);
    else if (value ==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("full Working Days:"+fullWorkingDays);
console.log("part working days:"+partWorkingDays);
console.log("non working says:"+nonWorkingDays);


//uc10 Object Creation
let totalEmpHrs =0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString(){
            return '\nday' + this.dayNum + '=> Working Hours is' + this.dailyHours + ' And Wage Earned =' + this.dailyWage
        },
    });
}
console.log("uc10 showing daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr)

//uc 11A to uc 11d using object along with Arrow function

let totalWages = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
  .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
  .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("Total Hours: " + totalHours + " Total Wages: " + totalWages);


// UC-11B 
let fullWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
  .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));
console.log("Logging Full Work Days" + fullWorkingDayStrArr);


// UC-11C 
let partWorkingDayStrArr = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
  .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("Part Working Days: " + partWorkingDayStrArr);


// UC-11D 
let nonWorkingDayStrArr = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
  .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Non Working Days: " + nonWorkingDayStrArr);

//uc12
// Class definition
class EmployeePayrollData {
    // property
    id;
    salary;
  
    // constructor
    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
  
    // getter and setter methods for both name and salary
    get name() { return this._name; }
    set name(name) { this._name = name; }
  
    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }
  
    // method
    toString() {
      return "id=" + this.id + ",name=" + this.name + ",salary=" + this.salary;
    }
  }
  
  let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
  console.log(employeePayrollData.toString());
  
  employeePayrollData.name = "John";
  employeePayrollData.salary = 20000;
  console.log(employeePayrollData.toString());
  
