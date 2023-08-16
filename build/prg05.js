"use strict";
//Write a program to show the grade obtained by a student 
//after he/she enters their total mark percentage.
//Program should accept an input from the user and display their grade.
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require('prompt-sync')();
let mark = parseFloat(promptInput('Enter the total_mark percentage: '));
let grade;
if (mark > 90) {
    grade = 'A';
}
else if (mark >= 80) {
    grade = 'B';
}
else if (mark >= 70) {
    grade = 'C';
}
else if (mark >= 60) {
    grade = 'D';
}
else if (mark >= 50) {
    grade = 'E';
}
else {
    grade = 'Failed 🛑';
}
console.log(`Grade: ${grade}`);
