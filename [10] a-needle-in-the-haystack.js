// Challenge Link: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c


// Solution Method_1:
function findNeedle(haystack) {
    // Get index of 'needle'
    let needlePosition = haystack.indexOf('needle'); 
    return needlePosition !== -1? `found the needle at position ${needlePosition}` : "Your function didn't return anything"
}

// Solution Method_2:
function findNeedle(haystack) {
    for (let i=0; i < haystack.length; i++) {
        // Check for 'needle' then Return its position if found
        if (haystack[i] === 'needle') 
            return `found the needle at position ${i}`
    }
    return "Your function didn't return anything"
}


// Test Cases:
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));                 // Out: found the needle at position 5
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));      // Out: found the needle at position 3
console.log(findNeedle([1, 5, 30, null, '3', 'ahmed', true]));                                              // Out: Your function didn't return anything