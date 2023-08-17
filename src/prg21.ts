/*Write a program to multiply the adjacent values of an array 
and store it in an another array.
Program should accept an array
Multiply the adjacent values
Store the result into another array
 */

export{};

const promptInput=require('prompt-sync')();

const limit:number=parseInt(promptInput('Enter the size of the array'));
const array:number[]=[];
const result:number[]=[];
console.log('Enter the values of array');
for(let i=0;i<limit;i++){
    let values=parseInt(promptInput(`Enter the value at index ${i+1} of array: `));
    array.push(values);
}
for(let i=0;i<limit-1;i++){
    let res=array[i]*array[i+1];
    result.push(res);
}
console.log('The entered array is:',array);
console.log('Array after multiplying with adjacent values',result);