// 1*2*3*4*5*6*7*8*9*10

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result*i;
        console.log(i, result);
    }
    return result;
}
const result = factorial(10);
console.log(result);