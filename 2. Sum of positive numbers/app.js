/* 
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/


// Method 1:
// function positiveSum(arr){
//     let sum = 0;
//     // Check if the number is positive or not
//     for(let i=0; i<arr.length ;i++){
//         if (arr[i] > 0){
//             sum = sum + arr[i]
//         }
//     }
//     return sum > 0? sum : 0;
// }
// console.log(positiveSum([1,-4,7,12]))



//Method 2:
function positiveSum(arr){
    arr.filter((x) => x > 0)                               // [1, 7, 12]
    .reduce((acc,current) => acc + current, 0)             // acc = initial value [0], current = the first item of the array [1]   ->   1 + 7 + 12
}
console.log(positiveSum([1,-4,7,12]))


