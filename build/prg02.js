"use strict";
//Accept two inputs from the user and output their sum.
const promptInput = require('prompt-sync')();
const num1 = parseInt(promptInput('Enter first number'));
const num2 = parseInt(promptInput('Enter second number'));
const sum = (num1, num2) => num1 + num2;
console.log(`The sum of ${num1}+${num2} is:${sum(num1, num2)}`);
