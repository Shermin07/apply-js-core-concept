// problem---1

function isEven(number){
    const remainder = number % 2;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const evenNumber =    isEven(98);
console.log(evenNumber);


function isOdd(number){
    const remainder = number % 2;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const oddNumber =    isOdd(117);
console.log(oddNumber);

// problem---2

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
       return false;
    }
}
const leapYear = isLeapYear(2023);
console.log(leapYear);

//problem-3
// hour to min
function hourToMin(hour){
    const min = hour / 0.0166667;
return min;
}
const mins = hourToMin(1);
console.log(mins)

// problem_4





function getLeapYearsOfAnArray(years){
    const leapYears = [];
    for (let i = 0; i < years.length; i++){
        const index = i;
        const element = years[index];
        if(element % 4  == 0){
            console.log(index,element);
            leapYears.push(element);

    }
    
   }
   return leapYears;
  }


const myYear = [2023, 2024, 2025, 2028, 2030];
const myLeapYears = getLeapYearsOfAnArray(myYear);
console.log(myLeapYears);




