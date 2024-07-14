// Challenge Link: https://www.codewars.com/kata/54edbc7200b811e956000556


// Solution Method_1 [using filter method]:
function countSheeps(sheep) {
    return sheep.filter(ele => ele === true).length;
}

// Solution Method_2 [using reduce method]:
function countSheeps(sheep) {
    return sheep.reduce((acc, ele) => ele === true? acc+1 : acc, 0);
}


// Solution Method_2 [using for-loop]:
function countSheeps(sheep) {
    let counter = 0;
    for (let i of sheep) {
        if (i === true) counter++;
    }
    return counter
}


// Test Cases:
var sheepArr1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];
console.log(countSheeps(sheepArr1));                    // Output: 17
var sheepArr2 = [undefined,null,false,true, 1];
console.log(countSheeps(sheepArr2));                    // Output: 1
var sheepArr3 = [undefined,0];
console.log(countSheeps(sheepArr3));                    // Output: 0