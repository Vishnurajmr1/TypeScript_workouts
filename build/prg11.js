"use strict";
/*Write a program to find the number of even numbers in an array
Program should accept an array and
display the number of even numbers contained in that array
 */
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
const limit = parseInt(promptInput('Enter the size of array: '));
console.log('Enter the values of array');
let array = [];
let count = 0;
for (let i = 0; i < limit; i++) {
    let values = parseInt(promptInput(`Enter the value at index ${i + 1} of array: `));
    array.push(values);
}
for (let i = 0; i < limit; i++) {
    if (array[i] % 2 === 0) {
        count++;
    }
}
console.log(`Number of even numbers in the given array is: ${count}`);
