// sum of array numbers

function getSumOfAnArray(numbers){
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}
const myNumbers = [5, 7, 8, 10, 45, 30];
getSumOfAnArray(myNumbers);

// get odd numbers and sum of odd numbers

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i< numbers.length; i++ ) {
        const index = i;
        const element = numbers[index];
        if( element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
        
    }
    
    return oddNumbers;
}

const herNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(herNumbers);
console.log(oddNumbers);
//getSumOfAnArray(herNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log("odd number sum:", oddNumberSum);
