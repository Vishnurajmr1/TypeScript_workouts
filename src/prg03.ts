//Write a program to find the simple interest.
//Program should accept 3 inputs from the user and 
//calculate simple interest for the given inputs. 
//Formula: SI=(P*R*n)/100)
const prompt_Input=require('prompt-sync')();

let P:number=parseInt(prompt_Input('Enter the principal amount:'));
let R:number=parseInt(prompt_Input('Enter the Rate of interest:'));
let n:number=parseInt(prompt_Input('Enter the number of years:'));

let simple_interest=(P*R*n)/100;
console.log(`The simple interest for amount ${P} at  
${R}% interest  for  ${n} years is: ${simple_interest}`);

