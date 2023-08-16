"use strict";
/*
Write a program to accept an array and display it on the console
using functions
Program should contain 3 functions including main() function
main()
*Declare an array
*Call function getArray()
*Call function displayArray()
getArray():
  Get values to the array
displayArray():
  Display the array values
 */
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
function main() {
    let limit = parseInt(promptInput('Enter the limit of array size'));
    let array = [];
    getArray(array, limit);
    displayArray(array);
}
function getArray(array, limit) {
    console.log('Enter the values to array');
    for (let i = 0; i < limit; i++) {
        array[i] = parseInt(promptInput(`Enter the value at index ${i + 1} of array1: `));
    }
}
function displayArray(array) {
    console.log(`The values of Array is:`, array);
}
main();
