"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
console.log('Enter the marks scored by the student');
let wrt_tst = parseFloat(promptInput('Written test = '));
let lab_tst = parseFloat(promptInput('lab test = '));
let assignment = parseFloat(promptInput('Assignments = '));
let avg = (wrt_tst * 70 + lab_tst * 20 + assignment * 10) / 100;
console.log('Grade of the student is: ', avg);
