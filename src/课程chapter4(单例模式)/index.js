class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init')
    }
    fun1() {
        console.log('fn1')
    }
    fun2() {
        console.log('fn2');
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

// 测试
let creator = new Creator()
let p = creator.create('p1')
p.init()
let pp = document.querySelectorAll('p');
// jq的工厂模式
class JQuery {
    constructor(selector) {
        let slic = Array.prototype.slice;
        let dom = slic.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for(let i = 0; i < len; i++) {
            this[i] = dom[i];

        }
        this.length = len;
        this.selector = selector || '';
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {

    }
    // 此处省略API
}
window.$ = function(selector) {
    return new JQuery(selector)
}
$('p').append();
