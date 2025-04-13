// Problem: Find the most repeated word in the sentence

// ==========================================================================

// Solution:
const sentence = "Ahmed Maher is a developer, Ahmed is specialized in web development";

// Step 1: Split the sentence into an array of words
const words = sentence.split(' ');

// Step 2: Create an object to store word frequencies
const wordCount = {};

// Step 3: Loop through the words and count occurrences
words.forEach((word) => {
    if (word in wordCount) {
        wordCount[word] += 1;   // Increment count if word already exists
    } else {
        wordCount[word] = 1;    // Initialize count if word appears for the first time
    }
})

// Step 4: Find the most repeated word
let highestCount = 0;
let mostRepeatedWord = '';

for (const word in wordCount) {
    const count = wordCount[word];
    if (count > highestCount) {
        highestCount = count;
        mostRepeatedWord = word;
    }
}

// Step 5: Output results
console.log("Most Repeated Word:", mostRepeatedWord);
console.log("Occurrences:", highestCount);