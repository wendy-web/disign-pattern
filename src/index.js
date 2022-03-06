alert('100');
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