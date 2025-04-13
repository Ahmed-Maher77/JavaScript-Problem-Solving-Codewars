/*
# Challenge Description:
-- create A simple program that simulates a Scrabble-like game for two players. Each player enters a word, and the program calculates a score for each word based on traditional Scrabble letter values. It then announces the winner or declares a tie.
-- Details:
---------- Prompts input for Player 1 and Player 2.
---------- Calculates total score for each word.
---------- Determines the winner or a tie based on scores.
-- Example:
---------- Player 1 inputs: CODE → Score: 7
---------- Player 2 inputs: QUIZ → Score: 22
---------- → Output: Player 2 wins!
*/



// =============== Soulation ===============
// Letter values mapping for Scrabble-like scoring
const letterValues = [
    { letter: 'A', value: 1 },
    { letter: 'B', value: 3 },
    { letter: 'C', value: 3 },
    { letter: 'D', value: 2 },
    { letter: 'E', value: 1 },
    { letter: 'F', value: 4 },
    { letter: 'G', value: 2 },
    { letter: 'H', value: 4 },
    { letter: 'I', value: 1 },
    { letter: 'J', value: 8 },
    { letter: 'K', value: 5 },
    { letter: 'L', value: 1 },
    { letter: 'M', value: 3 },
    { letter: 'N', value: 1 },
    { letter: 'O', value: 1 },
    { letter: 'P', value: 3 },
    { letter: 'Q', value: 10 },
    { letter: 'R', value: 1 },
    { letter: 'S', value: 1 },
    { letter: 'T', value: 1 },
    { letter: 'U', value: 1 },
    { letter: 'V', value: 4 },
    { letter: 'W', value: 4 },
    { letter: 'X', value: 8 },
    { letter: 'Y', value: 4 },
    { letter: 'Z', value: 10 },
];

// Prompt users for two words
let word1: string = "", word2: string = "";
while (word1.trim() === "") {
    word1 = prompt("Enter the first word: ")?.trim() || "";
}
while (word2.trim() === "") {
    word2 = prompt("Enter the second word: ")?.trim() || "";
}

// Check if both words are valid
const validWords = word1.length > 1 && word2.length > 1;
if (validWords) {
    // Convert words to uppercase
    const word1_Upper = word1.toUpperCase();
    const word2_Upper = word2.toUpperCase();
    
    // Extract letters from letterValues for quick lookup
    const letters = letterValues.map(obj => obj.letter);

    // Initialize counters for scores and variables for missing letters
    let counter1:number = 0, counter2:number = 0;
    let notExistedLetter1:string = "", notExistedLetter2: string = "";
    
    // Loop through each word and calculate its score
    const words = [word1_Upper, word2_Upper];
    for (const [index, word] of words.entries()) {
        [...word]?.forEach(letter => getLetterValue(letters, letter, index));
    }
    
    // Determine winner and loser based on scores
    const winnerScore = Math.max(counter1, counter2);
    const loserScore = winnerScore === counter1? counter2 : counter1;
    const winnerWord = counter1 > counter2? word1 : word2;
    const loserWord = winnerScore === counter1? word2 : word1;

    // Display results
    console.log(`The winner is ${winnerWord} with a score of ${winnerScore}`);
    if (notExistedLetter1 !== "") {
        console.log(`The first score execuldes the letters: ${notExistedLetter1}`);
    }
    console.log(`The loser is ${loserWord} with a score of ${loserScore}`);
    if (notExistedLetter2 !== "") {
        console.log(`The first score execuldes the letters: ${notExistedLetter2}`);
    }

    // calculate letter value for each word
    function getLetterValue(lettersArr: string[], letter: string, index: number) {
        const letterIndex = lettersArr.indexOf(letter);
                if (letterIndex !== -1) {
                    // Add value to the appropriate counter
                    switch (index) {
                        case 0:
                            counter1 += letterValues[letterIndex].value;
                            break;
                        case 1:
                            counter2 += letterValues[letterIndex].value;
                            break;
                        default:
                            break;
                    }
                } else {
                    // Track missing letters for each word
                    if (index === 0)
                        notExistedLetter1 += letter;
                    else if (index === 1)
                        notExistedLetter2 += letter;
                }
    }
}


// =============== Test Cases ===============
// Test case 1: 
// Input: CODE, QUIZ
// Output: The winner is QUIZ with a score of 22
//         The loser is CODE with a score of 7

// Test case 2:
// Input: HELLO, WORLD
// Output: The winner is WORLD with a score of 15
//         The loser is HELLO with a score of 12