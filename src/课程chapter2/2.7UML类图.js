console.log("2.7.UML类图-------------------------------------");
class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }
    saySomething() {
        console.log("I am People");
    }
}

class House {
    constructor(city) {
        this.city = city
    }
    showCity() {
        console.log(`当前的house的city在${this.city}`);
    }
}
class A extends People {
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am A')
    }
}
class B extends People {
    constructor(name, house) {
        super(name, house)
    }
    saySomething() {
        alert('I am B')
    }
}

// 测试
let aHouse = new House('深圳');
let a = new A("james Bond", aHouse);
console.log('a的房子地址', a.house && a.house.city)
const b = new B("wendy");
console.log('b的房子地址', b.house && b.house.city)