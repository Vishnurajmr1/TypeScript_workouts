"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
function reverseStr(str) {
    try {
        if (typeof str !== 'string') {
            throw new Error('It is not a string value.Please enter a string to continue');
        }
        else {
            let newStr = str.split('').reverse().join('');
            console.log(`Reversed string is ${newStr}`);
        }
    }
    catch (error) {
        console.log(error.message);
    }
    finally {
        console.log(`Type of ${str} is: ${typeof str}`);
    }
}
const value = promptInput('Enter a string: ');
reverseStr(value);
