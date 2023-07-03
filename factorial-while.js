function factorial(number){
    let i = number;
    let result = 1;
    while(i <= number){
        result = result * i;
        i++;
        
    }
    return result;
}
   const fact =  factorial(6);
   console.log(fact);

 //factorial - while- reverse

function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    
   
    }
    return result;
}
const outPut = factorial(7);
console.log(outPut);