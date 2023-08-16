// Write a program to print the multiplication table of given numbers.
//Accept an input from the user and display its multiplication table

export {};
const promptInput = require("prompt-sync")();

let num: number = promptInput("Enter a number: ");
let limit: number = promptInput("Enter the limit");
let i: number = 1;
while (i <= limit) {
  console.log(`${i} * ${num} = ${i * num}`);
  i++;
}
