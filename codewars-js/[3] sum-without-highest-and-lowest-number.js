// Challenge link: https://www.codewars.com/kata/576b93db1129fcf2200001e6



// Solution Method_1:
function sumArray(numbers) {
    // Validate input
    if (!Array.isArray(numbers) || numbers.length < 2) return 0;
    // Sort array
    numbers.sort((a, b) => a - b);
    // Sum excluding first and last elements
    let total = 0;
    for (let i = 1; i < numbers.length - 1; i++) {
        total += numbers[i];
    }
    return total;
}


// Solution Method_2:
function sumArray(numbers) {
    // Validate input
    if (!Array.isArray(numbers) || numbers.length < 2) return 0;
    // Sort array
    numbers.sort((a, b) => a - b);
    // Slice to exclude first and last elements
    let modifiedArr = numbers.slice(1, -1);
    // Sum array
    return modifiedArr.reduce((acc, num) => acc + num, 0);
}


// Solution Method_3:
function sumArray(numbers) {
    // Validate input
    if (!Array.isArray(numbers) || numbers.length < 2) return 0;
    // Sort array
    numbers.sort((a, b) => a - b);
    // Remove first and last elements
    numbers.shift();
    numbers.pop();
    // Sum remaining elements
    return numbers.reduce((acc, num) => acc + num, 0);
}


// Solution Method_4:
function sumArray(array) {
    // Validate input
    if (!Array.isArray(array) || array.length < 2) return 0;
    // Sort and filter extremes
    let filteredArr = array.sort((a, b) => a - b).filter((num, index, arr) => index != 0 && index !== arr.length - 1);
    // Sum remaining elements
    return filteredArr.reduce((acc, currentNum) => acc + currentNum, 0);
}


// Solution Method_5:
function sumArray(array) {
    // Validate input
    if (!Array.isArray(array) || array.length < 2) {return 0}
    // Without affecting on the original array
    let newSortedArr = array.concat().sort((a,b) => a - b);
    // Remove extremes
    newSortedArr.shift()
    newSortedArr.pop()
    // Sum remaining elements
    let sum = newSortedArr.reduce((acc, num) => acc + num, 0);
    return sum
}



// Test Cases
console.log(sumArray([6, 2]));              // Output: 0
console.log(sumArray([6, 2, 1, 8, 10]));    // Output: 16
console.log(sumArray([1, 1, 11, 2, 3]));    // Output: 6
console.log(sumArray([3, 7, 5, 2, 9]));     // Output: 15
console.log(sumArray(null));                // Output: 0