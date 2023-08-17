/*Write a menu driven program to calculate the area of a given object.
Program should contain two classes
Class 1: MyClass
Class 2: Area
 */
export{};
const promptInput=require('prompt-sync')();
class Area{
    circle(){
        const pi=3.14;
        let r:number=parseFloat(promptInput('Enter the radius: '));
        let res=pi*r*r;
        console.log(`The area of circle of radius: ${r}cm is: ${res}.cm2`);
    }
    square(){
        let len:number=parseInt(promptInput('Enter the length: '));
        let res:number=len*len;
        console.log(`Area of square is:${res}.sq.cm`);
    }
    rectangle(){
        let len:number=parseInt(promptInput('Enter the length: '));
        let bre:number=parseInt(promptInput('Enter the width: '));
        let res=len*bre;
        console.log(`Area of rectangle is ${res}sq.cm`);
    }
    triangle(){
        const half:number=0.5;
        let base_len:number=parseFloat(promptInput('Enter the base length: '));
        let height:number=parseFloat(promptInput('Enter the height: '));
        let res=base_len*height*half;
        console.log(`Area of triangle is ${res}cm`);
    }
}

class MyClass extends Area{
    main(){
        console.log('1.circle\n2.square\n3.rectangle\n4.triangle\nEnter your choice');
        let choice:number=parseInt(promptInput());
        let area=new Area();
        switch(choice){
            case 1:
                area.circle();
                break;
            case 2:
                area.square();
                break;
            case 3:
                area.rectangle();
                break;
            case 4:
                area.triangle();
                break;
            default:
                console.log('Invalid Entry');
                
        }
        
    }
}

const myClass=new MyClass();
myClass.main();