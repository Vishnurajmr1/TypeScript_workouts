"use strict";
//class sample program
// class Person{
//     public constructor(private name:string){
//         this.name=name;
//     }
//     public getName():string{
//         return this.name;
//     }
// }
// let person=new Person('Jane');
// console.log(person.getName());
// //inheritance:implements
// interface Shape{
//     getArea:()=>number;
// }
// class Rectangle implements Shape{
//     public constructor(protected readonly width:number,protected readonly heigth:number){}
//     public getArea():number{
//         return this.width*this.heigth;
//     };
// }
// //inheritance:extends
// class Square extends Rectangle{
//     public constructor(width:number){
//         super(width,width);
//     }
// }
// let mySq=new Square(20);
// console.log(mySq.getArea());
//abstract class 
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle extends Polygon {
    constructor(width, heigth) {
        super();
        this.width = width;
        this.heigth = heigth;
    }
    getArea() {
        return this.width * this.heigth;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
console.log(myRect.toString());
//Generics example with functions
function createPairs(v1, v2) {
    return [v1, v2];
}
console.log(createPairs('hello', 24));
//Generics example with classes
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
let pointPart = {};
pointPart.x = 10;
console.log(pointPart);
let myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000
};
console.log(myCar);
function printYardSize(house) {
    var _a;
    const yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log(`Yard is ${yardSize}sqft`);
    }
}
let home = {
    sqft: 500
};
printYardSize(home);
