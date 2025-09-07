//  Write a function filterEvenNumbers(arr) that takes an array of 
// numbers and returns a new array with only the even numbers.
//  • Sample Outputs
//  • filterEvenNumbers([1, 2, 3, 4]) // [2, 4]
//  • filterEvenNumbers([5, 6, 7, 8]) // [6, 8
function filterEvenNumbers(arrnum) {
    return arrnum.filter(num => num % 2 === 0)
}

console.log(filterEvenNumbers([1, 2, 3, 4])); 
console.log(filterEvenNumbers([5, 6, 7, 8])); 
