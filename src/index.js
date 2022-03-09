// import './2.5.面向对象';
// import './2.6.三要素- 继承';
import './2.7UML类图'
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