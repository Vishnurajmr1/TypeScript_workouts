/*
Write a program to find the sum of all the odd numbers for a given limit
Program should accept an input as limit from the user and 
display the sum of all the odd numbers within that limit
For example if the input limit is 10 
then the result is 1+3+5+7+9 = 25
*/

export{};
const promptInput=require('prompt-sync')();

let limit:number=parseInt(promptInput('Enter the limit: '));
let n:number=Math.floor((limit+1)/2);
let sum:number=n*n;

console.log('Sum of all odd numbers from 1 to',limit,'is:',sum);

