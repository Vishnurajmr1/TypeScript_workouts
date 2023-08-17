"use strict";
/*
Write an object oriented program to store and
display the values of a 2D array
Program should contains 3 functions including the main function
main()
Declare an array
Call function getArray()
Call function displayArray()
*getArray()=>Get values to the array
*displayArray()=>Display the array values
 */
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
class Main {
    main() {
        let limit = promptInput('Enter the limit');
        let array = [];
        this.getArray(limit, array);
        displayArray(limit, array);
    }
    getArray(limit, array) {
        console.log('Enter the values of Array: ');
        for (let i = 0; i < limit; i++) {
            array[i] = [];
            for (let j = 0; j < limit; j++) {
                let values = parseInt(promptInput(`Enter the values at index ${i + 1}: `));
                array[i][j] = values;
            }
        }
    }
}
function displayArray(limit, array) {
    console.log('The values of Array is :');
    for (let i = 0; i < limit; i++) {
        console.log(array[i].join(" "));
    }
}
const mn = new Main();
mn.main();
