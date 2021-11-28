//Uc-1
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT){
    console.log("Employee is Absent");
}else{
    console.log("Employee is Present");
}

//Uc-2
console.log("Uc2");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : " + empWage);

//Uc-3
console.log("Uc3")
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
        
    }
}
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : " + empWage);

//Uc4
console.log("Uc4");
empHrs = 0;
const NUM_OF_WORKING_DAYS = 20;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    empCheck = Math.floor(Math.random() * 10) %3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Wage : " + empWage);

//Uc5
console.log("Uc5");
const MAX_HRS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days :" + totalWorkingDays + " Total Hrs : " + totalEmpHrs + "Emp Wage : " + empWage);

// Uc6
console.log("Uc6");
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + empWage);

console.log("Uc7");
//Uc-7A
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + totalEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log(" Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//Uc-7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Uc7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//Uc-7C
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Uc7C-Daily Wage Filter when Fulltime Earned");
console.log(fullDayWageArr);

//Uc-7D
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Uc7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

//Uc-7E
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Uc7E- Check all element have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

//Uc-7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Uc7F-Check If Any PartTime Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//Uc-7G
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0)
        return numOfDays+1;
    return numOfDays;
}
console.log("Uc7G- Number od days Emp Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

//Uc-8
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
console.log(empDailyWageMap);
console.log("Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//Uc9 Arrow Functions

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Uc9-Emp Wage with Arrow : " + " Total Hours: " +totalHours+ " Total Wages : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if(value == 8){
        fullWorkingDays.push(key);
    }
    else if(value == 4){
        partWorkingDays.push(key);
    }
    else{
        nonWorkingDays.push(key);
    }
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

// Uc10 Object Creation
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while( totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
    {
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return '\nDay' + this.dayNum + "=> Working Hours is " + this.dailyHours +
                    ' And Wage Earned = ' + this.dailyWage
        },
    });
}

console.log("Uc10-Showing  Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);

//Uc11
totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                  .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                  .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("Uc-11A Total Hours : " + totalHours + " Total Wages : " + totalWages);

console.log("Uc-11B Logging Full Work Days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("Uc-11C PartWorkingDayStrings: " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Uc-11D NonWorkingDayNums : " +nonWorkingDayNums);