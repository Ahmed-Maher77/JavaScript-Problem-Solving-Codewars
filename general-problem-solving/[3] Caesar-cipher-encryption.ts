/*
# Challenge Description:
Implement the Caesar cipher, a substitution cipher that shifts each letter by a user-supplied key k.

-- Instructions:
---------- Input: A plaintext message and a non-negative integer key.
---------- Output: The ciphertext after shifting each alphabetical character by k.

-- Concepts:
---------- Using ASCII values to shift letters
---------- Preserving letter case (uppercase/lowercase)
---------- Leaving punctuation and spaces unchanged
*/

// =============================== Solution ===============================

// Prompt user for plaintext message
let plaintext: string = "";
do {
    plaintext = prompt("Enter your message:")?.trim() || "";
    if (plaintext === "") {
        console.log("Message can't be empty. Please enter a valid message.");
    }
} while (plaintext === "");

// Prompt user for a non-negative key (k)
let k: number | null = null;
do {
    const key: string = prompt("Enter the Key:") || "";
    if (isNaN(+key)) {
        console.log("Enter a valid number.");
    } else if (+key < 0) {
        console.log("Key must be a non-negative number.");
    } else {
        k = Number(key);
    }
} while (k === null);

// Encrypt the plaintext using Caesar cipher logic
let ciphertext: string = "";

for (const letter of plaintext) {
    if (!/[A-Za-z]/.test(letter)) {
        // Non-alphabetic characters remain unchanged
        ciphertext += letter;
        continue;
    }

    const isUpper = letter >= 'A' && letter <= 'Z';
    const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

    // Normalize and rotate using modular arithmetic
    const encryptedCharCode = ((letter.charCodeAt(0) - base + k) % 26) + base;
    ciphertext += String.fromCharCode(encryptedCharCode);
}

// Output the encrypted message
console.log(`ciphertext: ${ciphertext}`);


// =============================== Test Cases ===============================
// Test case 1:
// Input: "Hello, World!", 3
// Output: "Khoor, Zruog!"

// Test case 2:
// Input: "Caesar Cipher", 5
// Output: "Fijolq Gjxuq"