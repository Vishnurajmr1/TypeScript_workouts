export {};
let message = "Welcome to the world of TypeScript";
console.log(message);
//Variable declarations
let x = 10;
const y = 20;
let sum;
const title = "Codevolution";
//End of variable declarations

//Variable Types

let isBeginner: boolean = true; //variable type boolean
let total: number = 0; //Variable type number
let name1: String = "Vishwas"; //Variable type String;

//Eg of template strings
let sentence: string = `My name is ${name1}
I am a beginner in TypeScript `;

console.log(sentence);

//null and undefined type
let n: null = null;
let u: undefined = undefined;

//null & undefined can be used as subtype of any data type
/*
let isNew :boolean=null;
let myName:string=undefined;
*/

//Array declaration
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//tuple example
let person1: [String, number] = ["Chris", 22];

//enum type example
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c); //output 1

//Any type example

let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

let myVariable: unknown = 10;
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();

//just declaration of variable doesn't throw an error
/*
let a;
a=10;
a=true;
*/

//variable is initilazed then throw an error while using another type
/*
let b=20;
let b=true;//throw an error
*/

//using union type
let multiType: number | boolean;
multiType = 20;
multiType = true;
//multiType='hello';throws an error;

//functions

function add1(num1: number, num2: number): number {
  return num1 + num2;
}
add1(5, 10);
//optional parameter
function add_optional(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
add_optional(5, 10);
add_optional(5);

//sample function using object

//using interface

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function fullName(person: Person) {
//   console.log(`${person.firstName}${person.lastName}`);
// }

// let p = {
//   firstName: "Bruce",
//   lastName: "Wayne",
// };

// fullName(p);

//Eg for class

class Employees {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employees("Vishwas");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employees {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manger delegating tasks`);
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//primitive type annotations

let name: String = "John";
let age: number = 25;
let active: boolean = true;
//Arrays

let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];

//Objects

let person: {
  name: string;
  age: number;
};
person = {
  name: "John",
  age: 25,
};

//NOT operator

const pending: boolean = true;
const notPending = !pending; //false;
console.log(notPending); //false;

//AND operator

const hasError: boolean = false;
const completed: boolean = true;

//OR operator

let result = completed && hasError;
console.log(result); //false;

result = completed || hasError;
console.log(result); //true;

//array type
let skills: string[];
skills = ["Problem Solving", "Software Design", "Programming"];

//Array properties and method
let series = [1, 2, 3];
console.log(series.length);

let doubtIt = series.map((e) => e * 2);
console.log(doubtIt);

//multiple type array storing

let scores = ["Programming", 5, "Software Design", 4]; //In this case it infers the scores array as an array of string|number;

//enum example

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(Month.Jun)); //True;

//Type aliases example

type chars = string;

let message1: chars; //same as string type

type alphanumeric = string | number;

let input: alphanumeric;
input = 100; //valid
input = "Hi"; //valid
//input=false;//complier error;

//if-else

const max = 100;
let counter = 100;

if (counter < max) {
  counter++;
} else {
  counter = 1;
}

console.log(counter); //100

//Ternary Operator?:
counter < max ? counter++ : (counter = 1);

console.log(counter);

//if--else if-else

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; //5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; //10% discount
} else if (itemCount > 10) {
  discount = 15; //15%
} else {
  throw new Error("The number of items cannot be negative!");
}

console.log(`You got ${discount}% discount.`);

//switch case example
let targetId: string = "btnDelete";

switch (true) {
  case targetId === "btnUpdate":
    console.log("Update");
    break;
  case targetId === "btnDelete":
    console.log("Delete");
    break;
  case targetId === "btnNew":
    console.log("New");
    break;
}

//Grouping switch-case example

let month = 2,
  year = 2023;

let day = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    day = 30;
    break;
  case 2:
    if ((year % 4 === 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
    else day = 28;
    break;
  default:
    throw Error("Invalid month");
}

console.log(`The month ${month} in ${year} has ${day} days`);

//while -loop example

let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

//do-while loop
console.log("break of while loop");
let i = 0;
do {
  console.log(i);
  i++;
  if (i == 4) break;
} while (i < 10);

//break statement example

let products = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];

for (i = 0; i < products.length; i++) {
  if (products[i].price == 900) break;
}

// show the products
console.log(products[i]);

//continue statement example

for (let index = 0; index < 9; index++) {
  //if index is odd,skip it
  if (index % 2) continue;

  //the following code will be skipped for odd numbers;
  console.log(index);
}

//function example 

let add2:(a:number,b:number)=>number=
    function(x:number,y:number){
        return x+y;
    }
//example for optional parameter function 

function multiply(a:number,b:number,c?:number):number{

    if(typeof c!=='undefined'){
        return a*b*c;
    }
    return a*b;
}

//console.log(multiply(10,20,10));

//rest parameter example 

function getTotal(...numbers:number[]):number{
    let total=0;
    numbers.forEach((num)=>total+=num);
    return total;
}

console.log(getTotal());//0
console.log(getTotal(10,20));//30;
console.log(getTotal(10,20,30));//60;

//function overloading example

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any):any{
    return a+b;
}
//class example 

class Person{
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string,firstName:string,lastName:string){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }
    
    getFullName():string{
        return `${this.firstName}${this.lastName}`;
    }
}

let person_class=new Person('171280926','John','Doe');

//readonly modifier example

// class Person_readonly{
//     readonly birthDate:Date;

//     constructor(birthDate:Date){
//         this.birthDate=birthDate;
//     }
// }

// let person_readonly=new Person_readonly(new Date(1990,12,25));

// //example for getters and setters

// class Person_get_set{
//     private _age:number;
//     private _firstName:string;
//     private _lastName:string;

//     public get age(){
//         return this._age;
//     }

//     public set age(theAge:number){
//         if(theAge<=0 ||theAge>=200){
//             throw new Error('The age is invalid');
//         }
//         this._age=theAge;
//     }
//     public getFullName():string{
//         return `${this._firstName}${this._lastName}`;
//     }
// }

// class Parent_person{
//     constructor(private firstName:string,private lastName:string){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }

//     getFullName():string{
//         return `${this.firstName}${this.lastName}`
//     }
//     describe():string{
//         return `This is ${this.firstName}${this.lastName}.`;
//     }
// }

// class Employee1 extends Parent_person{
//     constructor(
//         firstName:string,
//         lastName:string,
//         private jobTitle:string
//     ){
//         //call the constructor of parent class
//         super(firstName,lastName);
//     }
//     //method overriding
//     describe(): string {
//         return super.describe()+`I'm a ${this.jobTitle}`;
//     }
// }

// let employee=new Employee1('John','Doe','Front-end Developer');

// console.log(employee.getFullName());
// console.log(employee.describe());

//static method and properties example

class Employee{
    static headcount:number=0;//static property

    constructor(

        private firstName:string,
        private lastName:string,
        private jobTitle:string
    ){
        Employee.headcount++;
    }
    
    //static method
    public static getHeadCount(){
        return Employee.headcount;
    }
}
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2

//abstract class sample program

abstract class Employeee{
  constructor (private firstName:string,private lastName:string){
  }

  abstract getSalary():number
    get fullName():string{
      return `${this.firstName}${this.lastName}`;
    }

    compensationStatement():string{
      return  `${this.fullName} makes ${this.getSalary()}a month`;
    }
}

class FullTimeEmployee extends Employeee{
  constructor(firstName:string,lastName:string,private salary:number){
    super(firstName,lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employeee{
  constructor(firstName:string,lastName:string,private rate:number,private hours:number){
    super(firstName,lastName);
  }

  getSalary(): number {
    return this.rate*this.hours;
  }
}

let johnee=new FullTimeEmployee('John','Doe',12000);
let janee=new Contractor('Jane','Doe',100,1600);

console.log(johnee.compensationStatement());
console.log(janee.compensationStatement());


//example for interface 

// function getFullName(personw:{
//   firstName:string;
//   lastName:string
// }){
//   return `${this.firstName} ${this.lastName}`
// }

// let personw={
//   firstName:'John',
//   lastName:'Doe'
// }

// console.log(getFullName(personw));

//interface example
// interface Person{
//   firstName:string;
//   lastName:string;
// }

// function getFullName_inter(person:Person){
//   return `${person.firstName} ${person.lastName}`
// };

// let johny={
//   firstName:'John',
//   lastName:'Doe'
// };

// console.log(getFullName_inter(johny));

//assign function interface

interface StringFormat{
  (str:string,isUpper:boolean):string
}

let format:StringFormat;

format=function(str:string,isUpper:boolean){
  return isUpper?str.toLocaleUpperCase():str.toLocaleLowerCase();
};

console.log(format('hi',true)); 

//extend interfaces 

interface Mailable{
  send(email:string):boolean
  queue(email:string):boolean
}

interface  FutureMailable extends Mailable{
  later(email:string,after:number):boolean
}

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    //console.log(`Send email to ${email} after ${after}ms.`);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}

//interface extending classes 

// class Control{
//   private state:boolean;
// }

// interface statefulControl extends Control{
//   enable():void
// }

// class Button extends Control implements statefulControl{
//   enable(): void {
    
//   }
// }
// class Label extends Control{

// }

//Error:cannot implement 
// class Chart implements statefulControl{
//   enable(): void {
    
//   }
// }

//intersection example

interface BusinessPartner{
  name:string;
  credit:number;
}

interface Identity{
  id:number;
  name:string;
}


interface Contact{
  email:string;
  phone:string;
}

type Employer=Identity & Contact;
type Customer=BusinessPartner & Contact;

let e:Employer={
  id:100,
  name:'John Doe',
  email:'john.doe@example.com',
  phone:'(404)-897-5684'
};

let cus:Customer={
  name:'ABC Inc',
  credit:100000,
  email:'sales@abcinc.com',
  phone:'(408)-897-5735'
};

//Later, if you want to implement employee sales,
// you can create a new intersection type that contains all properties of Identity, Contact, and BusinessPartner types:
// type Employer=Identity & BusinessPartner&Contact;


//type assertions

function getNetPrice(price:number,discount:number,format:boolean):number|string{
  let netPrice=price*(1-discount);
  return  format?`$${netPrice}`:netPrice;
}

let netPrice=getNetPrice(100,0.05,false)as number;
console.log(netPrice);

//Generics example

function getRandomNumberElement(items:number[]):number{
  let randomIndex=Math.floor(Math.random()*items.length);
  return items[randomIndex];
}

let numberss = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numberss));

function getRandomStringElement(items:string[]):string{
  let randomIndex=Math.floor(Math.random()*items.length);
  return items[randomIndex];
}

let colorss = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colorss));

function getRandomAnyElement(items:any[]):any{
  let randomIndex=Math.floor(Math.random()*items.length);
  return items[randomIndex];
}

let numbers1 = [1, 5, 7, 4, 2, 9];
let colors1 = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers1));
console.log(getRandomAnyElement(colors1));

//This solution works fine. However, it has a drawback.

//It doesn’t allow you to enforce the type of the returned element. In other words, it isn’t type-safe.

//A better solution to avoid code duplication while preserving the type is to use generics.


function getRandomElement<T>(items:T[]):T{
  let randomIndex=Math.floor(Math.random()*items.length);
  return items[randomIndex];
}

let numbers=[1,5,7,4,2,9];
let randomEle=getRandomElement<number>(numbers);
console.log(randomEle);

//Generic functions with multiple types

function merge<U,V>(obj1:U,obj2:V){
  return {
    ...obj1,
    ...obj2
  };
}

let results=merge(
  {name:'John'},
  {jobTitle:'Frontend Developer'}
);

console.log(results);

//Generic classes

class Stack<T>{
  private elements:T[]=[];

  constructor(private size:number){

  }

  isEmpty():boolean{
    return this.elements.length===0;
  }
  isFull():boolean{
    return this.elements.length===this.size;
  }
  push(element:T):void{
    if(this.elements.length===this.size){
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }

  pop(): T {
      if (this.elements.length == 0) {
        throw new Error('The stack is empty!');
    }
    return this.elements.pop() as T;
  }
}

//create a stack of strings. For example:

let words='The quick brown fox jumps over the lazy dog'.split('');

let wordStack=new Stack<string>(words.length);

//push words into the stack

words.forEach(word=>wordStack.push(word));

//pop words from the stack 

while(!wordStack.isEmpty()){
  console.log(wordStack.pop());
}
//module example

//using export with interface to make it export on other modules
// export  interface Validator{
//   isValid(s:string):boolean
// }

//using export statement
interface Validator{
  isValid(s:string):boolean
}

export{Validator};