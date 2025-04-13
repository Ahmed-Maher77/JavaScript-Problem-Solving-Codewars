// Challenge Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe


// Solution:
function even_or_odd(number) {
	return number % 2 === 0 ? "Even": "Odd";
}


// Test Cases:
console.log(even_or_odd(10));               // Output: Even
console.log(even_or_odd(11))			    // Output: Odd
console.log(even_or_odd(0))	                // Output: Even
