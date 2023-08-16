"use strict";
class A {
    constructor(initalCount) {
        this.initalCount = initalCount;
        this.initalCount = initalCount;
    }
    increament(value) {
        this.initalCount += value;
        console.log(this.initalCount);
    }
    getCount() {
        return this.initalCount;
    }
}
class B extends A {
    constructor(initalCount, newCount) {
        super(initalCount);
        this.newCount = newCount;
        this.newCount = newCount;
    }
    currentCount() {
        return super.getCount();
    }
}
let b = new B(10, 20);
console.log(b.currentCount());
