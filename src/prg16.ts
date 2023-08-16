/*
Write a program to check whether a given number is prime or not
Program should accept an input from the user 
and display whether the number is prime or not
 */

export{};

const promptInput=require('prompt-sync')();

const num:number=promptInput('Enter a number: ');
let flag=0;

for(let i=2;i<=num/2;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}

if(flag===1){
    console.log('Entered number is not Prime number');
}else{
    console.log('Entered number is Prime number');
    
}