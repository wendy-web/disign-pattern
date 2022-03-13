console.log("代理模式-------------------")

class RealImg {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk(); // 初始化硬盘的加载
    }
    display() {
        console.log("display")
    }
    loadFromDisk() {
        console.log("load-------------")
    }
}
class ProxyImg {
    constructor(fileName) {
        this.realImg = new RealImg(fileName);
    }
    display() {
        this.realImg.display(); // 代理原本的display的方法
    }
}

let proxyImg = new ProxyImg('1.png');
proxyImg.display();