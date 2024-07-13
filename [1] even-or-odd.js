// Challenge: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers


// Solution:
function even_or_odd(number) {
	return number % 2 === 0 ? "Even": "Odd";
}

// Test Cases:
console.log(even_or_odd(10));                   // Even
console.log(even_or_odd(11))			// Odd
console.log(even_or_odd(0))	                // Even
