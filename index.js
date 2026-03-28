
/* 
   UC 3: Add Part-time Employee & Wage
*/
function getEmployeeHours() {
  let empCheck = Math.floor(Math.random() * 3); // 0,1,2
  switch(empCheck) {
    case 0: return 0; // Absent
    case 1: return 4; // Part-time
    case 2: return 8; // Full-time
  }
}

let dailyWages = [];

for(let i=0; i<5; i++){  // simulate 5 days
    let wagePerHour = 20;
    let hours = getEmployeeHours();
    let wage = hours * wagePerHour;
    dailyWages.push(wage);
}
console.log("Daily Wage:", dailyWages);