"use strict";
/*
Write a program to find the sum of all the odd numbers for a given limit
Program should accept an input as limit from the user and
display the sum of all the odd numbers within that limit
For example if the input limit is 10
then the result is 1+3+5+7+9 = 25
*/
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
let limit = parseInt(promptInput('Enter the limit: '));
let n = Math.floor((limit + 1) / 2);
let sum = n * n;
console.log('Sum of all odd numbers from 1 to', limit, 'is:', sum);
