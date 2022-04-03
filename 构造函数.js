// function Person(name, age, sex) {
//   this.name = name;
//   this.age = age;
//   this.sex = sex;
// }

// const son = new Person('zhangsan', 18, '男');
// // delete son.name
// // console.log(son.name); 
// son.name = 'lisi';
// delete son.name
// console.log(son); 


// let myObject = {name: 'zhangsan'};

// Object.defineProperty(myObject, 'age', {
//   value: 18,
//   enumerable: true
// })
// console.log(myObject);
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      console.log(value);
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]