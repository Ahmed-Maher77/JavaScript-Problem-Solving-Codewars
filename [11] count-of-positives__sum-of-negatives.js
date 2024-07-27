// Challenge Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044


// Solution Method_1:
function countPositives_sumNegatives(numbers) {
    // Check for null or empty array
    if (!Array.isArray(numbers) || numbers.length === 0) return [];
    // Count positive numbers
    let positivesCount = numbers.filter(num => num > 0).length;
    // Sum negative numbers
    let sumNegatives = numbers.reduce((acc, num) => num < 0? acc+num : acc, 0)
    return [positivesCount, sumNegatives]
}

// Solution Method_2:
function countPositives_sumNegatives(numbers) {
    // Check for null or empty array
    if (!Array.isArray(numbers) || numbers.length === 0) return [];
    let positivesCount = 0;
    let sumNegatives = 0;
    // Loop to count positives and sum negatives
    for (let i of numbers) {
        if (i > 0) {
            positivesCount++
        } else if (i < 0) {
            sumNegatives += i
        }
    }
    return [positivesCount, sumNegatives]
}

// Solution Method_3:
function countPositives_sumNegatives(numbers) {
    // Check for null or empty array
    if (!Array.isArray(numbers) || numbers.length === 0) return [];
    let positivesCount = 0;
    let sumNegatives = 0;
    // Iterate to count positives and sum negatives
    numbers.forEach(num => {
        if (num > 0) {
            positivesCount++;
        } else if (num < 0) {
            sumNegatives += num;
        }
    });
    return [positivesCount, sumNegatives];
}


// Test Cases:
let arr1 = countPositives_sumNegatives([1,2,3,4,5,6,7,8,9, 10, -11, -12, -13, -14, -15]);
let arr2 = countPositives_sumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
console.log(arr1);                  // Out: [10, -65]
console.log(arr2);                  // Out: [8, -50]