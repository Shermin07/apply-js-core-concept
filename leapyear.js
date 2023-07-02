function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log("Your year is leap year :",    year);
    }
    else{
        console.log("Your year is not leap year", year);
    }
}
isLeapYear(1952);
isLeapYear(1983);

function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
       return true ;
    }
    else{
     return  false;
    }
}
const isMyLeapYear = isLeapYear(1990);
console.log("My Leap Year :"  ,  isMyLeapYear);
const isHerLeapYear = isLeapYear(2000);
console.log("Her Leap Year :"  ,  isHerLeapYear);