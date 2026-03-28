
/* 
   UC 6: Wages till Total Hours or Days Reached
*/
function getEmployeeHours() {
  let empCheck = Math.floor(Math.random() * 3); // 0,1,2
  switch(empCheck) {
    case 0: return 0; // Absent
    case 1: return 4; // Part-time
    case 2: return 8; // Full-time
  }
}

let totalHours = 0;
let day = 0;
let MAX_TOTAL_HOURS = 100;
let MAX_TOTAL_DAYS = 20;
let dailyWages = [];

while(totalHours < MAX_TOTAL_HOURS && day < MAX_TOTAL_DAYS){  // simulate 5 days
    day++;
    let wagePerHour = 20;
    let hours = getEmployeeHours();
    totalHours += hours;
    let wage = hours * wagePerHour;
    dailyWages.push(wage);
}

let totalWages = dailyWages.reduce((acc,curr) => acc+curr, 0);

console.log("Daily Wage: ", dailyWages);
console.log("Total Wages: ",totalWages);
console.log("Toatl Hours: ",totalHours);