// Challenge Link: https://www.codewars.com/kata/513e08acc600c94f01000001


// Solution Method_1:
function rgb(r, g, b) {
    // Limit each color component to the range 0-255
    let digits = [r, g, b];
    let limitedDigits = digits.map(num => {
        let constrainedValue = num < 0 ? 0 : num > 255 ? 255 : num;  
        return convertToHex(constrainedValue); 
    });
    // Convert number to 2-digit hex
    function convertToHex(value) {
        let hex = value.toString(16).toUpperCase();
        return hex.length < 2 ? `0${hex}` : hex;
    }
    // Combine hex values into color code
    return limitedDigits.join('');
}

// Solution Method_2:
function rgb(r, g, b) {
    // Constrain each color component to the 0-255 range
    r = limitRange(r);
    g = limitRange(g);
    b = limitRange(b);
    // Function to constrain a value within 0-255
    function limitRange(value) {
        if (value < 0) return 0;
        if (value > 255) return 255;
        return value;
    }
    // Convert a number to a 2-digit hex string
    function convertToHex(value) {
        let hexValue = value.toString(16).toUpperCase();
        return hexValue.length < 2 ? `0${hexValue}` : hexValue;
    }
    // Convert each color component to hex and concatenate them
    let hexR = convertToHex(r);
    let hexG = convertToHex(g);
    let hexB = convertToHex(b);
    // Return the combined hex color code
    return `${hexR}${hexG}${hexB}`;
}

// Solution Method_3:
function rgb(r, g, b) {
    // Color components
    let digits = [r, g, b];
    // Convert each to 2-digit hex
    let limitedDigits = digits.map(num => {
        let numInRange = Math.max(0, Math.min(255, num));
        return numInRange.toString(16).toUpperCase().padStart(2, '0');
    });
    // Combine hex values
    return limitedDigits.join('');
}


// Test Cases:
console.log(rgb(255, 255, 255));        // Out: FFFFFF            
console.log(rgb(255, 255, 300));        // Out: FFFFFF
console.log(rgb(0, 0, 0));              // Out: 000000
console.log(rgb(148, 0, 211));          // Out: 9400D3