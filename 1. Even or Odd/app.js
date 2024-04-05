// Challenge: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// Solution:
function even_or_odd(number){
    return (number % 2 == 0)? "Even" : "Odd"
}
console.log(even_or_odd(5))


// Another Solution:
/*
function even_or_odd(number){
    if (number%2 == 0){
        return "Even"
    }
    else {
        return "Odd"
    }
}
console.log(even_or_odd(5))
*/