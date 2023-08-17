/*
Write a myFilter function that takes 2 parameters: 
myArray and callback. Here, myArray is an array of 
numbers and callback is a function that takes the elements of 
myArray as its parameter and returns a boolean true if the sum of 
the number is even or false if the sum of the number  is odd.
 */

export{};
const promptInput=require('prompt-sync')();

type myArray=number[];

const arr:myArray=[];

function myFilter(arr:myArray,callback:(sum:number)=>boolean){
    let sum=arr.reduce((acc,curr)=>acc+curr,0);
    let result=callback(sum);
    console.log(`Sum is ${sum} result is : ${result}`); 
}

function callback(sum:number):boolean{
    if(sum%2===0){
        return true;
    }else{
        return false;
    }
}
let limit:number=parseInt(promptInput('Enter the limit: '))

for(let i=0;i<limit;i++){
    let values=parseInt(promptInput(`Enter the values at index ${i+1}: `))
    arr.push(values);
}
myFilter(arr,callback);
