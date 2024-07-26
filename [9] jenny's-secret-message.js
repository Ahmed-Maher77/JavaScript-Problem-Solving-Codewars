// Challenge Link: https://www.codewars.com/kata/55225023e1be1ec8bc000390


// Solution:
function greet(name) {
	return name !== "Johnny"? `Hello, ${name} !` : `Hello, my love!`;
}


// Test Cases:
console.log(greet("Ahmed"));          // Output: Hello, Ahmed!
console.log(greet("Johnny"));         // Output: Hello, my love!