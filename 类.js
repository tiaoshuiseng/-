// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
    
//     static displayName = "Point";

//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;
//         return Math.hypot(dx, dy);
//     }
// }

// const p1 = new Point(1, 3);
// const p2 = new Point(4, 5);
// // 类的static方法 不能在实例化对象中调用
// console.log(p1.displayName);
// // 不需要实例化，通过本身就能调用
// console.log(Point.displayName); // Point
// console.log(Point.distance(p1, p2));


// ___________________________
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // 调用超类构造函数并传入name参数
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  var d = new Dog('Mitzie');
  d.speak();// 'Mitzie barks.'
