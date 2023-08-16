"use strict";
// Write a program to print the multiplication table of given numbers.
//Accept an input from the user and display its multiplication table
Object.defineProperty(exports, "__esModule", { value: true });
const promptInput = require("prompt-sync")();
let num = promptInput("Enter a number: ");
let limit = promptInput("Enter the limit");
let i = 1;
while (i <= limit) {
    console.log(`${i} * ${num} = ${i * num}`);
    i++;
}
