function isEven (number){
const remainder = number % 2;
console.log("your number is even." , remainder);
}
isEven(100)

function isEven (number){
    const remainder = number % 2;
    if( remainder === 0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}
const myNumber = isEven(129);
console.log(myNumber);

function isOdd(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
        
    
}
const herNumber = isOdd(120);
console.log(herNumber);



function isOdd(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
        
    
}
const hisNumber = isOdd(125);
console.log(hisNumber);