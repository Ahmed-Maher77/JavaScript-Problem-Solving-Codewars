// Challenge Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Solution Method_1 [using a loop]:
function repeatStr (n, s) {
    let totalString = '';
    for (let i = 0; i < n; i++) {
        totalString += s
    }
    return totalString;
}

// Solution Method_2 [using the repeat method]:
function repeatStr (n, s) {
    return s.repeat(n);
}


// Test Cases:
console.log(repeatStr (5, 't'));            // Output: "ttttt"
console.log(repeatStr (5, "Hello"));        // Output: "HelloHelloHelloHelloHello"
console.log(repeatStr (6, "I"));            // Output: "IIIIII"
