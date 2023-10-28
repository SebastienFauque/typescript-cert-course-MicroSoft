// Declare a generic interface as a variable type.
interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: "Hello!"
}

let returnString: Identity<string, number> = {
    value: "hello!",
    message: 25
}

// Declare a generic interface as a function type.
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!') // OK
let returnNumber2 = processor('Hello!', 100); // Type check error as it doesn't fit the generic template

// Decalre a generic interface as a class type
interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity3<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor2 = new processIdentity3<number, string>(100, 'Hello');
processor2.process(); // displays 'Hello'
processor2.value = '100'; // Type check error as we are now trying to make a string fit a number type.