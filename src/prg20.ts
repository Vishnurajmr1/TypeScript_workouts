/*
 Write a program to print the following pattern using for loop
1
2 3
4 5 6
7 8 9 10
 */

export{};
const promptInput=require('prompt-sync')();

const limit:number=parseInt(promptInput('Enter the limit: '));
let str:string="";
let num=1;

for(let i=1;i<=limit;i++){
    for(let j=1;j<=i;j++){
        str+=(num++)+" ";
    }
    str+=('\n');
}

console.log(str);
