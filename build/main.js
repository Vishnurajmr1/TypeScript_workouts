"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Welcome to the world of TypeScript";
console.log(message);
//Variable declarations
let x = 10;
const y = 20;
let sum;
const title = "Codevolution";
//End of variable declarations
//Variable Types
let isBeginner = true; //variable type boolean
let total = 0; //Variable type number
let name1 = "Vishwas"; //Variable type String;
//Eg of template strings
let sentence = `My name is ${name1}
I am a beginner in TypeScript `;
console.log(sentence);
//null and undefined type
let n = null;
let u = undefined;
//null & undefined can be used as subtype of any data type
/*
let isNew :boolean=null;
let myName:string=undefined;
*/
//Array declaration
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
//tuple example
let person1 = ["Chris", 22];
//enum type example
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c); //output 1
//Any type example
let randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
let myVariable = 10;
function hasName(obj) {
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
let multiType;
multiType = 20;
multiType = true;
//multiType='hello';throws an error;
//functions
function add1(num1, num2) {
    return num1 + num2;
}
add1(5, 10);
//optional parameter
function add_optional(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
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
    constructor(name) {
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
    constructor(managerName) {
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
let name = "John";
let age = 25;
let active = true;
//Arrays
let names = ["John", "Jane", "Peter", "David", "Mary"];
//Objects
let person;
person = {
    name: "John",
    age: 25,
};
//NOT operator
const pending = true;
const notPending = !pending; //false;
console.log(notPending); //false;
//AND operator
const hasError = false;
const completed = true;
//OR operator
let result = completed && hasError;
console.log(result); //false;
result = completed || hasError;
console.log(result); //true;
//array type
let skills;
skills = ["Problem Solving", "Software Design", "Programming"];
//Array properties and method
let series = [1, 2, 3];
console.log(series.length);
let doubtIt = series.map((e) => e * 2);
console.log(doubtIt);
//multiple type array storing
let scores = ["Programming", 5, "Software Design", 4]; //In this case it infers the scores array as an array of string|number;
//enum example
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    let isSummer;
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
let message1; //same as string type
let input;
input = 100; //valid
input = "Hi"; //valid
//input=false;//complier error;
//if-else
const max = 100;
let counter = 100;
if (counter < max) {
    counter++;
}
else {
    counter = 1;
}
console.log(counter); //100
//Ternary Operator?:
counter < max ? counter++ : (counter = 1);
console.log(counter);
//if--else if-else
let discount;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; //5% discount
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; //10% discount
}
else if (itemCount > 10) {
    discount = 15; //15%
}
else {
    throw new Error("The number of items cannot be negative!");
}
console.log(`You got ${discount}% discount.`);
//switch case example
let targetId = "btnDelete";
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
let month = 2, year = 2023;
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
        if ((year % 4 === 0 && !(year % 100 == 0)) || year % 400 == 0)
            day = 29;
        else
            day = 28;
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
    if (i == 4)
        break;
} while (i < 10);
//break statement example
let products = [
    { name: "phone", price: 700 },
    { name: "tablet", price: 900 },
    { name: "laptop", price: 1200 },
];
for (i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
}
// show the products
console.log(products[i]);
//continue statement example
for (let index = 0; index < 9; index++) {
    //if index is odd,skip it
    if (index % 2)
        continue;
    //the following code will be skipped for odd numbers;
    console.log(index);
}
//function example 
let add2 = function (x, y) {
    return x + y;
};
//example for optional parameter function 
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
//console.log(multiply(10,20,10));
//rest parameter example 
function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); //0
console.log(getTotal(10, 20)); //30;
console.log(getTotal(10, 20, 30)); //60;
function add(a, b) {
    return a + b;
}
//class example 
class Person {
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName}${this.lastName}`;
    }
}
let person_class = new Person('171280926', 'John', 'Doe');
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
class Employee {
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    //static method
    static getHeadCount() {
        return Employee.headcount;
    }
}
Employee.headcount = 0; //static property
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');
console.log(Employee.headcount); // 2
//abstract class sample program
class Employeee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName}${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()}a month`;
    }
}
class FullTimeEmployee extends Employeee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employeee {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
let johnee = new FullTimeEmployee('John', 'Doe', 12000);
let janee = new Contractor('Jane', 'Doe', 100, 1600);
console.log(johnee.compensationStatement());
console.log(janee.compensationStatement());
let format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
class Mail {
    later(email, after) {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email) {
        //console.log(`Send email to ${email} after ${after}ms.`);
        return true;
    }
    queue(email) {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
let e = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(404)-897-5684'
};
let cus = {
    name: 'ABC Inc',
    credit: 100000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
//Later, if you want to implement employee sales,
// you can create a new intersection type that contains all properties of Identity, Contact, and BusinessPartner types:
// type Employer=Identity & BusinessPartner&Contact;
//type assertions
function getNetPrice(price, discount, format) {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, false);
console.log(netPrice);
//Generics example
function getRandomNumberElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numberss = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numberss));
function getRandomStringElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let colorss = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colorss));
function getRandomAnyElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers1 = [1, 5, 7, 4, 2, 9];
let colors1 = ['red', 'green', 'blue'];
console.log(getRandomAnyElement(numbers1));
console.log(getRandomAnyElement(colors1));
//This solution works fine. However, it has a drawback.
//It doesn’t allow you to enforce the type of the returned element. In other words, it isn’t type-safe.
//A better solution to avoid code duplication while preserving the type is to use generics.
function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers);
console.log(randomEle);
//Generic functions with multiple types
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let results = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });
console.log(results);
//Generic classes
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
//create a stack of strings. For example:
let words = 'The quick brown fox jumps over the lazy dog'.split('');
let wordStack = new Stack(words.length);
//push words into the stack
words.forEach(word => wordStack.push(word));
//pop words from the stack 
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
