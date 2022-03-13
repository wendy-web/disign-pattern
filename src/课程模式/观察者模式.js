console.log("观察者模式");
// 主题，接受状态的变化，触发每个观察者
class Subject {
    constructor() {
        this.state = 0;
        this.observers = []
    }
    getState () {
        return this.state;
    }
    setState () {
        this.state = this.state;
        this.notifyAllObservers();
    }
    attach(observer) {
        this.observers.push(observer);
    }
    notifyAllObservers() {
        this.observers.forEach((observer) => {
            observer.update();
        })
    }
}
// 观察者，等待被触发
class Observer{
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update() {
        console.log(`${this.name} update, state:${this.subject.getState()}`)
    }
}

// 测试代码
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)

s.setState(1)
s.setState(2)
s.setState(3)