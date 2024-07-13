/* 
# Challenge:
-- You get an array of numbers, return the sum of all of the positives ones
-- Example [1,-4,7,12] => 1 + 7 + 12 = 20
-- Note: if there is nothing to sum, the sum is default to 0
*/



// Solution Method_1 (using reduce only):               
function positiveSum(arr) {
    return arr.reduce((sum, num) => num > 0? num + sum : sum, 0);
}


// Solution Method_2 (using filter and reduce):            
/*
function positiveSum(numbers) {
    let positiveNums = numbers.filter(num => num > 0);
    let sum = positiveNums.reduce((acc, num) => acc + num, 0)
    return sum 
}
*/


// // Solution Method_3 (using for...of loop):             
/*
function positiveSum(arr) {
    let sum = 0;
    for (let num of arr) {
        num > 0? sum += num : null
    }
    return sum
}
*/



// Test Cases
console.log(positiveSum([1, -4, 7, 12]));   // Output: 20
console.log(positiveSum([10, 20, -50]));    // Output: 30
console.log(positiveSum([-10, -20, -50]));  // Output: 0