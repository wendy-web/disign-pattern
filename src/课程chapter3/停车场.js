/**
题干描述：
- 某停车场，分 3 层，每层 100 车位
- 每个车位可以监控车辆的停入和离开
- 车辆进入前，显示每层的空余车位数量
- 车辆进入时，摄像头可识别车牌号和时间
- 车辆出来时，出口显示器显示车牌号和停车时长
 */

// 车
class Car {
    constructor(num) {
        this.num = num;
    }
}
// 摄像头
class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

// 出口显示屏幕
class Screen {
    show (car, inTime) {
        console.log("车牌号", car.num);
        console.log("停车时间", Date.now() - inTime);
    }
}

// 停车场
class Park {
    constructor (floors){
        this.floors = floors; // 停车场的层数
        this.carList = {}; // 存储摄像头拍摄返回的车辆信息
        this.camera = new Camera(); // 摄像头
        this.screen = new Screen();
    }
    // 驶入
    in(car) {
        // 通过摄像头获取car的信息
        const info = this.camera.shot(car);
        const i = parseInt(Math.random() * 100 % 100); // 获取一个随机数
        const place = this.floors[0].places[i]; // 直接先写入停在第一层
        place.in(); // 车辆停入
        info.place = place; // 该车辆对象添加个停入的位置信息

        // 记录信息
        this.carList[car.num] = info;
    }
    // 驶离
    out(car) {
        // 获取信息
        const info = this.carList[car.num];
        // 将停车位清空
        const place = info.place;
        place.out();
        // 显示时间
        this.screen.show(car, info.inTime);
        delete this.carList[car.num];

    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index} 层还有${floor.emptyPlaceNum()}`
        }).join('\n');
    }
}
// 层
class Floor{
    constructor(index, places) {
       this.index = index;
       this.places = places || [];
    }
    // 空余的车位
    emptyPlaceNum() {
        let num = 0;
        this.places.forEach(p => {
            if(p.empty) {
                num = num + 1;
            }
            
        });
        return num;
    }
}
// 停车位
class Place {
    constructor() {
        this.empty = true;
    }
    in() {
        this.empty = false;
    }
    out() {
        this.empty = true;
    }
}


// 测试
// 初始化停车场
const floors = [];
for(let i = 0; i < 3; i++) {
    const places = [];
    for(let j = 0; j < 100; j++) {
        places[j] = new Place();
    }
    floors[i] = new Floor(i + 1, places);
}
const park = new Park(floors);

// 初始化车辆
const car1 = new Car(100);
const car2 = new Car(200);

console.log("第一辆车进入");
park.in(car1)
console.log(park.emptyNum());
console.log("第二辆车进入");
park.in(car2)
console.log(park.emptyNum());

console.log("第一辆车出去");
park.out(car1);
console.log(park.emptyNum());
console.log("第二辆车出去");
park.out(car2);
console.log(park.emptyNum());