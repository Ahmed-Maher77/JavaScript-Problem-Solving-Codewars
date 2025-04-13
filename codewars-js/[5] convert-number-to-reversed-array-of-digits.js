// Challenge Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051


// Solution:
function digitize(number) {
    // Convert the number to an array of characters
    let digitArray = number.toString().split('');
    // Convert each character to a number then Reverse the array and return it
    return digitArray.map(str => Number(str)).reverse();
}


// Test Cases:
console.log(digitize(35231));             // Output: [1,3,2,5,3]
console.log(digitize(0));                 // Output: [0] 
