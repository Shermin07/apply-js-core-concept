function factorial ( number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const fact = factorial(9);
console.log("factorial of 9:" , fact);

const number = 5;
const facto = factorial (number);
console.log("factorial of:", number, facto);

