"use strict";
//1 Enums
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]);
console.log(employeeStatus);
//2 Any type
let randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
//3 Unknown type
/*
The unknown type is similar to the any type in that any value is assignable to type
unknown. However, you can't access any properties of an unknown type, nor can you
call or construct them.
*/
let randomValue2 = 10;
randomValue2 = true;
randomValue2 = 'Mateo';
console.log(randomValue2.name); // Error: Object is of type unknown
randomValue2(); // Error: Object is of type unknown
randomValue2.toUpperCase(); // Error: Object is of type unknown
//4 Type assertions
// exists in two forms:
randomValue.toUpperCase() // Prefered syntax as JSX can get confused with <
(randomValue).toUpperCase();
let randomValue3 = 10;
randomValue3 = true;
randomValue3 = 'Mateo';
if (typeof randomValue3 === "string") {
    console.log(randomValue3.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
//5 Unions
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid
let trueOrFalseQuestion;
trueOrFalseQuestion = true; //* Valid
trueOrFalseQuestion = false; //* Valid
trueOrFalseQuestion = "sometimes"; //* Invalid
//8 Collection types
// Anything that isn't a primative type, so class, interface, array, literal types
// Arrays
let list = [1, 2, 3];
// or (but the same thing)
let list = [1, 2, 3];
// Tuples (order of items in tuple is important)
let person1 = ["marcia", 35]; //* Valid
let person2 = ["marcia", 35, true]; //* Invalid
let person3 = ["marcia", 35, true]; //* Valid
