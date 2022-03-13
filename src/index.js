// import './课程chapter2/2.5.面向对象';
// import './课程chapter2/2.6.三要素- 继承';
// import './课程chapter2/2.7UML类图'

// import './课程chapter3/打车的面试题'
// import './课程chapter3/停车场'
// import './课程chapter4(单例模式)/index'
// import './课程模式/代理模式'
import './课程模式/观察者模式'
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