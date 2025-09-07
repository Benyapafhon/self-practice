//  • Write a function squareNumbers(arr) that takes an array of numbers 
// and returns a new array with each number squared.
//  • Sample Outputs
//  • squareNumbers([1, 2, 3, 4]) // [1, 4, 9, 16]
//  • squareNumbers([5, 6]) // [25, 36]
function squareNumbers(numnum) {
    return numnum.map(num => num ** 2);
}   

console.log(squareNumbers([1, 2, 3, 4])); 
console.log(squareNumbers([5, 6]));