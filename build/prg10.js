"use strict";
/*
Write a program to interchange the values of two arrays.
Program should accept an array from the user,
swap the values of two arrays and display it on the console
*/
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
const size = parseInt(promptInput('Enter the size of arrays: '));
let array1 = [];
let array2 = [];
let temp = [];
console.log('Enter the values of Array1');
for (let i = 0; i < size; i++) {
    let values = parseInt(promptInput(`Enter the values at index ${i + 1} for array1: `));
    array1.push(values);
}
console.log('Enter the values of Array2');
for (let i = 0; i < size; i++) {
    let values = parseInt(promptInput(`Enter the values at index ${i + 1} for array2: `));
    array2.push(values);
}
console.log('Arrays before swapping:');
console.log('array1:', array1);
console.log('array2:', array2);
temp = array1;
array1 = array2;
array2 = temp;
console.log('Arrays after swapping:');
console.log('array1:', array1);
console.log('array2:', array2);
