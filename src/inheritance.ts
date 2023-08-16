class A{
    constructor(private initalCount:number){
        this.initalCount=initalCount;
    }
    increament(value:number){
        this.initalCount+=value;
        console.log(this.initalCount);
    }

    getCount():number{
        return this.initalCount;
    }
}
class B extends A{
    constructor(initalCount:number,private newCount:number){
        super(initalCount)
        this.newCount=newCount;
    }

    currentCount():number{
        return  super.getCount();
    }

    
}

let b=new B(10,20);

console.log(b.currentCount());
