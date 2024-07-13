// Problem Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6


// Solution Method_1:
// function sumArray(array) {
//     // Input Validation
//     if (!Array.isArray(array) || array.length < 2) {
//         return 0
//     }
//     // Sort the array in ascending order
//     let arr = array.sort((a,b) => a - b);
//     // Remove the lowest and highest numbers
//     arr.shift();
//     arr.pop();
//     // Calculate the sum of the remaining numbers
//     let sum = arr.reduce((acc, num) => num + acc, 0);
//     return sum
// }


// Solution Method_2:
// function sumArray(array) {
//     // Input Validation
//     if (!Array.isArray(array) || array.length < 2) {
//         return 0
//     }
//     // Sort the array in ascending order and filter out extremes
//     let filteredArr = array.sort((a,b) => a-b).filter((num, index, arr) => num === arr[index+1] || num !== arr[0] && num !== arr[arr.length-1]);
//     // Calculate the sum of the remaining numbers
//     let sum = filteredArr.reduce((acc, currentNum) => acc + currentNum, 0);
//     return sum
// }


// Solution Method_3:
// function sumArray(array) {
//     // Input Validation
//     if (!Array.isArray(array) || array.length < 2) {
//         return 0
//     }
//     // Find the highest and lowest numbers in the array
//     let highest = Math.max(...array);
//     let lowest = Math.min(...array);
//     // Filter out the highest and lowest numbers from the array
//     let filteredArr = array.filter((num, index, arr) => num === arr[index+1] || num !== highest && num !== lowest);
//     // Calculate the sum of the filtered array
//     let sum = filteredArr.reduce((acc, num) => acc + num);
//     return sum
// }


// Solution Method_4 (using bubble sort algorithm):
// sort using loop




// using array
// Test Cases
// console.log(sumArray([6, 2]));    // Output: 16
// console.log(sumArray([6, 2, 1, 8, 10]));    // Output: 16
// console.log(sumArray([1, 1, 11, 2, 3]));    // Output: 6
// console.log(sumArray([3, 7, 5, 2, 9]));     // Output: 15
// console.log(sumArray(null));                // Output: 0