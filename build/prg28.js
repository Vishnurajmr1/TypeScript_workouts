"use strict";
/*
 Create a constructor function that satisfies the following conditions:
The name of the constructor function should be Car.
It should take three parameters: name, mileage and max_speed.
Store these parameter values in their respective this keywords:
this.name, this.mileage and this.max_speed.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
class Car {
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
}
const car = new Car('BMW', 13, 180);
console.log(car);
