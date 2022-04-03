function Person(name) {
    this.name = name;
}
// 修改原型
// Person.prototype.getName = function() {};
// var p = new Person('zhangsan');
// console.log(p.__proto__ === Person.prototype);
// console.log(p.__proto__ === p.constructor.prototype);

// 重写原型
Person.prototype = {
    getName: function() {}
}
var p = new Person('zhangsan');
console.log(p.__proto__ === Person.prototype); //true
console.log(p.__proto__ === p.constructor.prototype); // false
// 这次修改原型的时候  p的构造函数constructor不是指向Person了，因为直接给Person的原型对象赋值，
// 它的构造函数指向了跟构造函数Object，所以这个时候p.constructor === Object ,要想之前的继续成立
// 要重新指回来  p.constructor = Person
Person.prototype = {
    getName: function() {}
}
var p = new Person('hello')
p.constructor = Person
console.log(p.__proto__ === Person.prototype)        // true
console.log(p.__proto__ === p.constructor.prototype) // true
