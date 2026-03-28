

function isEmployeeIsPresent(){
    
    let empCheck = Math.floor(Math.random(0,2)*2);

    if(empCheck === 1){
        return "Employee is Present";
    }else{
        return "Employee is Absent"
    }
}

console.log(isEmployeeIsPresent());