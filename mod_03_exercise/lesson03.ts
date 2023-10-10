/*
Interfaces in typescript
*/

/*
You can use interfaces to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.

This simple interface defines the two properties and a method of an Employee object.
*/

interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

// Create an instance of the interface
let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'


/*
Types vs interfaces

A type alias is a definition of a type of data, for example, a union, primitive,
intersection, tuple, or any other type. Interfaces, on the other hand, are a way
to describe data shapes, for example, an object. Type aliases can act like interfaces;
however, there are some subtle differences. The key distinction is that a type alias
cannot be reopened to add new properties whereas an interface is always extendable. 
Also, you can only describe a union or tuple using a type alias
*/

type Employee2 = {
    firstName: string;
    lastName: string;
    fullName(): string;
}


// Index types
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream2: IceCreamArray;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream2[0];
console.log(myStr);

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();