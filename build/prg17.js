"use strict";
/*Write a menu driven program to do the basic mathematical operations
such as addition, subtraction, multiplication and division
Program should have 4 functions named
addition(), subtraction(),multiplication() and division()
Should create a class object and call the appropriate function as
user prefers in the main function
*/
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require("prompt-sync")();
let num1 = parseInt(promptInput("Enter 2 numbers"));
let num2 = parseInt(promptInput(""));
class MathOperations {
    addition() {
        console.log(`The result of ${num1}+${num2} is: `, num1 + num2);
    }
    subtraction() {
        console.log(`The result of ${num1}-${num2} is: `, num1 - num2);
    }
    multiplication() {
        console.log(`The result of ${num1}X${num2} is: `, num1 * num2);
    }
    division() {
        console.log(`The result of ${num1}/${num2} is: `, num1 / num2);
    }
}
const operations = new MathOperations();
console.log(`Enter your choice:\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division`);
let choice = parseInt(promptInput(''));
switch (true) {
    case choice == 1:
        operations.addition();
        break;
    case choice == 2:
        operations.subtraction();
        break;
    case choice == 3:
        operations.multiplication();
        break;
    case choice == 4:
        operations.division();
        break;
    default:
        console.log('Invalid choice');
}
