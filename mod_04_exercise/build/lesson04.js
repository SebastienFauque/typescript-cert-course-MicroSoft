"use strict";
// Overview of typescript functions
// Named functions - Hoisted to the top before code is ran
function addNumbers(x, y) {
    return x + y;
}
//  addNumbers(1, 2);
// Anonymous functions - Not hoisted, ran when seen within execution context
let addNumbers2 = function (x, y) {
    return x + y;
};
// addNumbers2(1, 2);
// Named function implemented as a anonymous function
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
// console.log(sum([1, 2, 3]));
// Lambda/Arrow functions - shorthand syntax of an anonymous function
// Anonymous function
let addNumbers3 = function (x, y) {
    return x + y;
};
// Arrow function
let addNumbers4 = (x, y) => x + y;
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
/*
Exercises
*/
function displayAlert(message) {
    console.log('The message is ' + message);
}
// displayAlert('hello') // valid
// displayAlert(223) // invalid
function sum2(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    console.log(total);
    return total;
}
// sum(5) // invalid
// sum2([1,2,3,4,5]) //valid
/* Notes 2 */
function addNumbers5(x, y) {
    return x + y;
}
//  addNumbers(1, 2); // Returns 3
//  addNumbers(1);    // Returns an error
// Optional parameters - always come after required parameters
function addNumbers6(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
// addNumbers6(1, 2); // Returns 3
// addNumbers6(1);    // Returns 1
// Default parameters - always come after required parameters - type infered from default value
function addNumbers7(x, y = 25) {
    return x + y;
}
addNumbers7(1, 2); // Returns 3
addNumbers7(1); // Returns 26
// Rest parameters - for unbounded arrays, comes as the end and will accept all additional arguments, or none because they are optional.
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
// displayMessage({sender: 'Christopher', text: 'hello, world'});
/* Exercises 2 */
// let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;
// addThreeNumbers(10, 20) // Invalid, requires 3 arguments
// addThreeNumbers(10, 20, 30, 40) // Invalid, TSError requires 3 arguments
// addThreeNumbers(10, 20, 30) // valid
// let addThreeNumbers = (x: number, y?: number, z: number): number => x + y + z; // invalid because required parameter z cannot come after optional parameter y.
// let addThreeNumbers = (x: number, y: number, z?: number): number => x + y + z; // Invalid TSError because z is possibly undefined and needs to be controlled for.
let addThreeNumbers = (x, y, z) => {
    if ((z === undefined)) {
        return x + y;
    }
    else {
        return x + y + z;
    }
}; // valid
// addThreeNumbers(1, 2, 3)
let subtractThreeNumbers = (x, y, z = 100) => x - y - z; // valid 
subtractThreeNumbers(10, 20); // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15); // returns -25
let addNumbers8 = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
console.log(addNumbers8(1, 2));
console.log(subtractNumbers(1, 2));
// The function type can also b e used for declaring the return type of a function.
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
// These three types are identical due to attaching the Calculator type
// let addNumbers8: Calculator = (x: number, y: number): number => x + y;
// let addNumbers9 Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers0 Calculator = (num1, num2) => num1 + num2;
