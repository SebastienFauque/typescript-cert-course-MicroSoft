"use strict";
/* Classes in TypeScript */
// By convention classes are declared in PascalCase
class Car {
    // Constructor
    constructor(make, model, doors = 4) {
        this._color = "blue";
        this._make = make;
        this._model = model;
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Number of doors must be even.");
        }
        Car.numOfCars++;
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return `The color of the car is ${this._color}`;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number.");
        }
    }
    // Methods
    static getNumberOfCars() {
        return Car.numOfCars;
    }
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
// Static properties
Car.numOfCars = 0;
let myCar1 = new Car("Tesla", "Model Y", 4);
console.log(myCar1.color);
// let myCar2 = new Car('Galaxy Motors', 'Saturn', 3, "blue"); // No validation on the door numbers happens b/c it is in the constructor
// myCar2.doors = 1 // invalid due to the setter function
// Edit the constructor to validate the number of doors at object instantiation
// let myCar2 = new Car('Galaxy Motors', 'red', 3); // invalid, valid now happens at instantiation
let myCar3 = new Car('Galaxy Motors', 'Jupiter');
console.log(myCar3.doors); // returns 4, the default value,
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
// myCar1.worker() // invalid
console.log(`Number of cars: ${Car.getNumberOfCars()}.`);
