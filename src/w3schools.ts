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

abstract class Polygon{
    public abstract getArea():number;

    public toString():string{
        return `Polygon[area=${this.getArea()}]`
    }
}

class Rectangle extends Polygon{
    public constructor(protected readonly width:number,protected readonly heigth:number){
        super()
    }

    public getArea(): number {
        return this.width*this.heigth;
    }
}

const myRect=new Rectangle(10,20);

console.log(myRect.getArea());
console.log(myRect.toString());

//Generics example with functions

function createPairs<S,T>(v1:S,v2:T):[S,T]{
    return[v1,v2];
}

console.log(createPairs<string,number>('hello',24));

//Generics example with classes

class NamedValue<T>{
    private _value:T|undefined;

    constructor(private name:string){}

    public setValue(value:T){
        this._value=value;
    }
    public getValue():T|undefined{
        return this._value;
    }

    public toString():string{
        return `${this.name}${this._value}`;
    }
} 

let value=new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());

//utility types 

//Partial=>changes all properties in an object  to  be  optional.

interface Point{
    x:number;
    y:number;
}

let pointPart:Partial<Point>={};
pointPart.x=10;

console.log(pointPart);

//Required=>Changes all properties in an object to be required.

interface Car{
    make:string;
    model:string;
    mileage?:number;
}

let myCar:Required<Car>={
    make:'Ford',
    model:'Focus',
    mileage:12000
}

console.log(myCar);

//optional chaining example

interface House{
    sqft:number;
    yard?:{
        sqft:number;
    };
}

function printYardSize(house:House){
    const yardSize=house.yard?.sqft;

    if(yardSize===undefined){
        console.log('No yard');
    }else{
        console.log(`Yard is ${yardSize}sqft`);  
    }
}

let home:House={
    sqft:500
}

printYardSize(home);



