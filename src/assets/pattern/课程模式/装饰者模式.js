console.log("装饰者模式");
class Circle {
    draw() {
        console.log('画一个原型')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBoder(circle)
    }
    setRedBoder(circle) {
        console.log('设置红色边框')
    }
}

// 测试代码
let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)  // 装饰
dec.draw()