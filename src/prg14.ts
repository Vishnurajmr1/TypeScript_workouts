/* Write a program to add to two dimensional arrays
Program should accept two 2D arrays and display its sum */

export {};

const promptInput = require("prompt-sync")();

let limit: number = parseInt(promptInput("Enter the size of array"));

let array1: number[][] = [];
let array2: number[][] = [];

console.log("Enter the values of Array1");

for (let i = 0; i < limit; i++) {
  array1[i] = [];
  for (let j = 0; j < limit; j++) {
    const values: number = parseInt(
      promptInput(`Enter the value at index ${i + 1} of array1: `)
    );
    array1[i][j] = values;
  }
}

console.log("Enter the values of Array2");
for (let i = 0; i < limit; i++) {
  array2[i] = [];
  for (let j = 0; j < limit; j++) {
    const values: number = parseInt(
      promptInput(`Enter the value at index ${i + 1} of array2: `)
    );
    array2[i][j] = values;
  }
}

//adding two arrays

for (let i = 0; i < limit; i++) {
  for (let j = 0; j < limit; j++) {
    array1[i][j] = array1[i][j] + array2[i][j];
  }
}

console.log("Sum of 2 arrays is: ");
for (let i = 0; i < limit; i++) {
  console.log(array1[i].join(" "));
}
