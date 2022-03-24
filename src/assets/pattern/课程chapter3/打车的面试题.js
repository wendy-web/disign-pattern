/**
 * 题干描述
 * 打车时，你可以打快车和专车
 * 无论什么车，都有车牌号和车辆名称
 * 打不同的车价格不同，快车每公里 1 元，专车每公里 2 元
 * 打车时，你要启动行程并显示车辆信息
 * 结束行程，显示价格（假定行驶了 5 公里）
 */
class Car {
    constructor(number, name) {
        this.number = number; // 车牌号
        this.name = name; // 车名
    }
}

// 快车
class kuaiChe extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 1; // 快车每公里1元
    }
}
class zhuanche extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 2; // 专车每公里2元
    }
}
// 行程
class Trip {
    constructor(car, distance) {
        this.car = car;
        this.distance = distance; // 当前行使距离
    }
    start () {
        console.log(`行程开始：车辆的名称是${this.car.name}, 车牌号信息是${this.car.number}`);
    }
    end() {
        console.log(`行程结束：车程的金额是：${this.car.price * this.distance}`);
    }
}

const car = new kuaiChe("粤B", "小轿车");
const trip = new Trip(car, 5);
trip.start();
trip.end();