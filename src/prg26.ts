/* Given a variable named my_string, 
try reversing the string using  my_string.split().reverse().join() 
and then print the reversed string to the console.
 If the try clause has an error, print the error message to the console. 
 Finally, print the typeof of the my_string variable to the console.
 */
 export{};
 const promptInput=require('prompt-sync')();

 function reverseStr(str:string|number){
    try {
        if(typeof str!=='string'){
            throw new Error('It is not a string value.Please enter a string to continue');
        }else{
            let newStr=str.split('').reverse().join('');
            console.log(`Reversed string is ${newStr}`);
        }
    } catch (error:any) {
        console.log(error.message);
    }
    finally{
        console.log(`Type of ${str} is: ${typeof str}`);   
    }
 }

 const value=promptInput('Enter a string: ');
 reverseStr(value);