"use strict";
/*Write a program to add the values of two 2D arrays
Program should contains 3 functions including the main function
Call function getArray()
Call function addArray()
Call function displayArray()
*getArray()=> Get values to the array
*addArray()=> Add array 1 and array 2
*displayArray()=>Display the array values
*/
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
const limit = parseInt(promptInput('Enter the limit'));
const array1 = [];
const array2 = [];
const sumArray = [];
function main() {
    function getArray() {
        console.log('Enter the values of array1');
        for (let i = 0; i < limit; i++) {
            array1[i] = [];
            for (let j = 0; j < limit; j++) {
                let values = parseInt(promptInput(`Enter the value at index ${i + 1} of array: `));
                array1[i][j] = values;
            }
        }
        console.log('Enter the values of array2');
        for (let i = 0; i < limit; i++) {
            array2[i] = [];
            for (let j = 0; j < limit; j++) {
                let values = parseInt(promptInput(`Enter the value at index ${i + 1} of array2: `));
                array2[i][j] = values;
            }
        }
    }
    function addArray() {
        for (let i = 0; i < limit; i++) {
            sumArray[i] = [];
            for (let j = 0; j < limit; j++) {
                sumArray[i][j] = array1[i][j] + array2[i][j];
            }
        }
    }
    function displayArray() {
        console.log('sum of array1 and array2: ');
        for (let i = 0; i < limit; i++) {
            console.log(sumArray[i].join(" "));
        }
    }
    getArray();
    addArray();
    displayArray();
}
main();
