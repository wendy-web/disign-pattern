// import './课程chapter2/2.5.面向对象';
// import './课程chapter2/2.6.三要素- 继承';
// import './课程chapter2/2.7UML类图'

import './课程chapter3/打车的面试题'
class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name;
    }
}

const p1 = new Person("wendy");
console.log(p1.getName());