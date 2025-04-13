// Challenge Link: https://www.codewars.com/kata/56b1f01c247c01db92000076


// Solution Method_1:
function doubleChar(str) {
    // Convert string to array, double each char, join back to string
    return str.split('').map(char => char.repeat(2)).join('');
}

// Solution Method_2:
function doubleChar(str) {
    // Initialize result string
    let doubleChars = '';
    // Double each character
    for (let i=0; i < str.length; i++) {
        doubleChars += str[i] + str[i]
    }
    return doubleChars
}

// Solution Method_3:
function doubleChar(str) {
    // double each char and accumulate
    return str.split('').reduce((acc, char) => acc + char + char, '')
}


// Test Cases:
console.log(doubleChar('String'));            // Out: 'SSttrriinngg'
console.log(doubleChar('Hello'));             // Out: 'HHeelllloo'
console.log(doubleChar('1234!_ '));           // Out: '11223344!!__  '