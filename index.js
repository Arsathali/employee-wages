
/* 
  UC2 -> To Calculate Daily Employee Wage
*/
function getEmployeeHours() {
  let empCheck = Math.floor(Math.random() * 3); // 0,1,2
  switch(empCheck) {
    case 0: return 0; // Absent
    case 1: return 4; // Part-time
    case 2: return 8; // Full-time
  }
}

let wagePerHour = 20;
let hours = getEmployeeHours();
let dailyWage = hours * wagePerHour;
console.log("Daily Wage:", dailyWage);