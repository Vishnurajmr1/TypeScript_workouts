"use strict";
/*
Given a variable named my_height, you must throw errors under the following conditions:
notANumberError- When my_heightis NaN
HugeHeightError – When my_heightis greater than 200
TinyHeight Error - When my_heightis less than 40
 */
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
const height = parseInt(promptInput('Enter the height: '));
try {
    if (isNaN(height)) {
        throw new Error('notAnumberError');
    }
    else if (height > 200) {
        throw new Error('hugeHeightError');
    }
    else if (height < 40) {
        throw new Error('tinyHeightError');
    }
}
catch (error) {
    console.log(error.message);
}
