console.log("2.5.面向对象-------------------------------------");
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

let Bond = new Person("james Bond", 29);
Bond.eat();
Bond.speak();

const wendy = new Person("wendy", 23);
wendy.eat();
wendy.speak();