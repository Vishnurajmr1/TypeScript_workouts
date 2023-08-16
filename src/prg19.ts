/*Write a program to find out the income tax amount of a person.
Program should accept annual income of a person
Output the amount of tax he has to pay

Eg 1:
Enter the annual income
495000
Income tax amount = 24750.00

Eg 2:
Enter the annual income
500000
Income tax amount = 25000.00
 */

export{};
const promptInput=require('prompt-sync')();

console.log('Enter the annual_income');

let amt:number=promptInput('');

function Interest(){
    if(amt>(2.5)*(10**5)){
        console.log('Income tax amount =',(amt*5)/100);
    }
    else if(amt>=5*(10**5)){
        console.log('Income tax amount =',(amt*5)/100);
    }
    else if(amt>(10)*(10**5) && amt<=(50)*(10**5)){
        console.log('Income tax amount =',(amt*30)/100);
    }
    else if(amt>(2.5)*(10**5)){
        console.log('Income tax amount =',(amt*5)/100);
    }else if(amt>(50) *(10**5)){
        console.log('Income tax amount =Not Calculated');
        
    };
}

Interest()