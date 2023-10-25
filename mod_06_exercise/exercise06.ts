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
