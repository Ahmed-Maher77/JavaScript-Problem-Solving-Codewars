// Challenge Link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7


// Solution Method_1:
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
        default:
            return `Invalid Operation`
    }
}

// Solution Method_2:
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2)
}


// Test Cases:
console.log(basicOp('+', 10, 3));            // Out: 13