/* Classes in TypeScript */
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}
// By convention classes are declared in PascalCase
class Car implements Vehicle {
    // Properties - raw data passed to the class object when it's initialized.
    private _make: string 
    private _model: string
    private _doors: number
    private _color: string = "blue"
    // Static properties
    private static numOfCars: number = 0

    // Constructor
    constructor(make: string, model: string, doors: number = 4) {
    this._make = make
    this._model = model
    if ((doors % 2) === 0) {
        this._doors = doors
    } else {
        throw new Error("Number of doors must be even.")
    }
    Car.numOfCars++
    }

    // Accessors
    get make() {
        return this._make
    }
    set make(make) {
        this._make = make
    }

    get color() {
        return `The color of the car is ${this._color}`
    }
    set color(color) {
        this._color = color
    }

    get doors() {
        return this._doors
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors
        } else {
            throw new Error("Doors must be an even number.")
        }
    }


    // Methods
    public static getNumberOfCars(): number {
        return Car.numOfCars;
    }

    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    protected worker(): string {
        return this._make;
    } 

}

let myCar1 = new Car("Ford", "Model T",4)
console.log(myCar1.color);

// let myCar2 = new Car('Galaxy Motors', 'Saturn', 3, "blue"); // No validation on the door numbers happens b/c it is in the constructor
// myCar2.doors = 1 // invalid due to the setter function

// Edit the constructor to validate the number of doors at object instantiation
// let myCar2 = new Car('Galaxy Motors', 'red', 3); // invalid, valid now happens at instantiation

let myCar3 = new Car('Galaxy Motors', 'Jupiter');
console.log(myCar3.doors);  // returns 4, the default value,

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

// myCar1.worker() // invalid
console.log(`Number of cars: ${Car.getNumberOfCars()}.`)


class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;

    // Constructor
    constructor(make: string, model: string, range: number, doors = 2) {
        super(make, model, doors);
        this._range = range;
    }

    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }

    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }

    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"


// MOre on interfaces
/* 

If you were creating a full-stack application with both client and server implementations,
 you will typically need to define how data will be structured. If the data in question was
 to store information about a dog, for example, you might create an interface that looks like this:

*/

interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

/*
This interface could be used in a shared module for both your client and server code, 
ensuring the data structure is the same on both sides. On the client, you might have
 code to retrieve the dog from the server API you define, which looks like the following:

*/
/*
Here is an example of how a client will get the code from the server. 


async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}
*/
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
}
