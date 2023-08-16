/* Write a program to print the following pattern 
1
1 2 
1 2 3
1 2 3 4 
1 2 3 4 5
*/


export{};
const promptInput=require('prompt-sync')();

const limit:number=parseInt(promptInput('Enter the limit: '));

for(let i=1;i<=limit;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+=j+" ";
    }
    console.log(str);
}