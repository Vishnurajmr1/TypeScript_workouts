"use strict";
//Accept a char input from the user and display it on the console
const getInput = require("prompt-sync")();
const char = getInput("Enter a character:");
console.log(`You entered: ${char}`);
// import * as  readline from 'readline';
// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// r1.question("Enter a character",function(char:string){
//     console.log(`You entered: ${char}`)
//     r1.close();
// })
