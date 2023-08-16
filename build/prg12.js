"use strict";
/*
Write a program to sort an array in descending order
Program should accept and array,
sort the array values in descending order and display it
*/
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
const limit = parseInt(promptInput('Enter the size of array'));
const array = [];
console.log('Enter the values of array');
for (let i = 0; i < limit; i++) {
    let values = parseInt(promptInput(`Enter the value at index ${i + 1} of array: `));
    array.push(values);
}
let temp;
for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(`Sorted Array: ${array}`);
