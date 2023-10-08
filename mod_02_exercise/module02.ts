//1 Enums
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus])
console.log(employeeStatus);  

//2 Any type
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK


//3 Unknown type
/*
The unknown type is similar to the any type in that any value is assignable to type 
unknown. However, you can't access any properties of an unknown type, nor can you 
call or construct them.
*/

let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Mateo';

console.log(randomValue2.name);  // Error: Object is of type unknown
randomValue2();                  // Error: Object is of type unknown
randomValue2.toUpperCase();      // Error: Object is of type unknown


//4 Type assertions
// exists in two forms:
(randomValue as string).toUpperCase() // Prefered syntax as JSX can get confused with <
// or
(<string>randomValue).toUpperCase()

let randomValue3: unknown = 10;

randomValue3 = true;
randomValue3 = 'Mateo';

if (typeof randomValue3 === "string") {
    console.log((randomValue3 as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

//5 Unions
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error

//6 Intersection types
// uses the & to separate types
interface Employee {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
  };

//7 literal types
// You specifiy the exact value that a str, num, or bool has.
// ex: "yes", "no", "maybe"
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid

// or
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid

// or
type trueOrFalseResult = true | false;
let trueOrFalseQuestion: trueOrFalseResult;
trueOrFalseQuestion = true; //* Valid
trueOrFalseQuestion = false; //* Valid
trueOrFalseQuestion = "sometimes" //* Invalid

//8 Collection types
// Anything that isn't a primative type, so class, interface, array, literal types
// Arrays
let list: number[] = [1, 2, 3];
// or (but the same thing)
let list: Array<number> = [1,2,3];

// Tuples (order of items in tuple is important)
let person1: [string,number] = ["marcia", 35]; //* Valid
let person2: [string, number] = ["marcia", 35, true]; //* Invalid
let person3: [string, number, boolean] = ["marcia", 35, true]; //* Valid

