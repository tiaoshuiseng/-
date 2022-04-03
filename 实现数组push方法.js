// 实现数组的push方法
let arr = [];
Array.prototype.push() = function() {
    for(let i=0; i<arguments.length; i++) {
        console.log(this);
        this[this.length] = arguments[i];
    }
    return this.length;
}

arr.push(1)
// function functionTest(a,b) {
//     console.log(arguments[0]);
// }