//  Write a function convertToUppercase(arr) that takes an array of 
// strings and returns a new array with all strings converted to 
// uppercase.
// Sample Outputs
// convertToUppercase(['hello', 'world'])) // ['HELLO', 'WORLD']
// convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']
 
function convertToUppercase(array) {
    return array.map(str => str.toUpperCase())
}

console.log(convertToUppercase(['hello', 'world']))// ['HELLO', 'WORLD']
console.log(convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']