function formatTime() {
  let arr = [];
  for(let i = 0; i < 10000; i++) {
    arr.push(i);
  }
}

var start = Date.now();

// 调用一个消耗一定时间的方法：
formatTime();
var end = Date.now();
var elapsed = end - start;
console.log(elapsed);