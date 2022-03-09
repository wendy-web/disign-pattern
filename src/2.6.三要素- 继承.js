console.log("2.6.三要素-------------------------------------继承");
// 父类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
    speak() {
        console.log(`My name is ${this.name}, age ${this.age}`);
    }
}
// 子类继承父类
class Student extends Person {
    constructor(name, age, number) {
        super(name, age);
        this.number = number;
    }
    student() {
        console.log(`${this.name} study`);
    }
}

let Bond = new Student("james Bond", 29, "研究生 A1");
Bond.eat();
Bond.student();

const wendy = new Person("wendy", 23, "研究生 A2");
wendy.eat();
wendy.speak();