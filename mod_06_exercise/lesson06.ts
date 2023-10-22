/* Generics 
Generics can work over a variety of types while keeping the power of the 
typescript type checking system.

They are code templates that can be defined and reused.

They tell functions, classes, or interfaces what type you want to use when calling it.

The type is specified when calling the function.

They are enclosed in <> brackets, the generic type name is commonly called T.
*/


// This code can be used to make a string array or num array.
// You can also pass strings to the num array and vise versa.
function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


// rewrite the function as a generic that will accept a type that is
// passing in. Anywhere a "T" is will be replaced with the passed
// in type.
function getArray2<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray2 = getArray2<number>([5, 10, 15, 20]); //valid
// let numberArray3 = getArray2<number>([5, "ten", 15, 20]); //invalid
//numberArray2.push("dog") // invalid
console.log("🚀🚀 ~ file: lesson06.ts:39 ~ numberArray2:", numberArray2)


function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber2 = identity<number, string>(100, 'Hello!');
let returnString2 = identity<string, string>('100', 'Hola!');
let returnBoolean2 = identity<boolean, string>(true, 'Bonjour!');

returnNumber2 = returnNumber2 * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

function identity2<T, U> (value: T, message: U) : T {
    // Error that will appear at compile time. The generic T
    // doesn't know the type of value, also the left side of the 
    // arithmetic operation must be of type 'any' 'number', 'bigint', or an enum
    // because it doesn't know what value will be passed to it at runtime. 
    let result: T = value + value;
     
    console.log(message);
    return result
}

// A "Generic Constraint" will be used to restrict the types of values that can be 
// passed in as a generic.
type ValidTypes = string | number;

function identity3<T extends ValidTypes, U> (value: T, message: U) : T {
    let result: T = value + value;    // Error as the type of result isn't an accepted arithemetic operator type.
    console.log(message);
    return result
}

let returnNumber3 = identity<number, string>(100, 'Hello!');      // OK
let returnString3 = identity<string, string>('100', 'Hola!');     // OK
let returnBoolean3 = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.


// "Keyof" can be used to constrain a type to the property of another object.
// In this example the "K extends keyof T" will see that T(pets1) is an object
// and that K will be the type of the keys found on the object (pets1) 
function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" }

console.log(getPets(pets1, "fish")) // Returns 6
console.log(getPets(pets2, "3")) // Error

/*
You'll notice that TypeScript still raises an issue with the value + value expression
 in the identity function. But now you know that only number and string types can be 
 passed to the function.

You can use the typeof type guard in an if block to check the type of the value 
parameter before performing an operation, as shown in the following example. TypeScript
 can determine from the if statement if the operation will work with the values provided
  within the block.
*/
type ValidTypes2 = string | number;
function identity4<T extends ValidTypes2, U> (value: T, message: U) { // Return type is inferred
    let result: ValidTypes2 = '';
    let typeValue: string = typeof value;

    // only allows nubmers and strings. Typeof typeguards will not work with classes.
    // To typeguard a class, use "instanceof".
    if (typeof value == 'number') {
        result = value + value;
    } else if (typeof value === 'string') {
        result = value + value;
    }

    console.log(`The message is ${message} and the function returns a ${typeValue}
    value of ${result}.`);

    return result
}

let numberValue = identity4<number, string>(100, "hello");
let stringValue = identity4<string, string>('100', 'hello');

console.log(numberValue); // returns 200
console.log(stringValue); // returns 100100