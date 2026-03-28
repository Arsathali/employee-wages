
/* 
   UC 7: Refactor to Class Method
*/
class EmployeeWage {

  constructor(company, wagePerHour, maxDays, maxHours) {
    this.company = company;
    this.wagePerHour = wagePerHour;
    this.maxDays = maxDays;
    this.maxHours = maxHours;
    this.dailyWage = [];
    this.totalWage = 0;
  }

  computeWage() {

    let totalHours = 0;
    let day = 0;

    while(day < this.maxDays && totalHours < this.maxHours) {

      let hours = getEmployeeHours();
      let wage = hours * this.wagePerHour;
      this.dailyWage.push(wage);
      this.totalWage += wage;
      totalHours += hours;
      day++;

    }
  }

  printWage() {
    console.log(`Company: ${this.company}`);
    console.log("Daily Wages:", this.dailyWage);
    console.log("Total Wage:", this.totalWage);
  }
}

function getEmployeeHours() {
  let empCheck = Math.floor(Math.random() * 3); // 0,1,2
  switch(empCheck) {
    case 0: return 0; // Absent
    case 1: return 4; // Part-time
    case 2: return 8; // Full-time
  }
}

let emp = new EmployeeWage("DMart", 20, 20, 100);
emp.computeWage();
emp.printWage();