
/* 
  UC 9: Ability to Save Total Wage for Each Company
*/
class CompanyEmpWage {

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
    console.log(`\nCompany: ${this.company}`);
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

let companyMap = new Map();

// Add companies
companyMap.set("DMart", new CompanyEmpWage("DMart", 20, 20, 100));
companyMap.set("Reliance", new CompanyEmpWage("Reliance", 25, 22, 120));
companyMap.set("Tata", new CompanyEmpWage("Tata", 30, 18, 90));

companyMap.forEach((companyObj, companyName) => {
  companyObj.computeWage();
});

console.log("\n--- Total Wages by Company ---");
companyMap.forEach((companyObj, name) => {
  console.log(`${name}: ${companyObj.totalWage}`);
});