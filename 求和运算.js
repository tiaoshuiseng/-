function add() {
  var args = Array.prototype.slice.call(arguments);
  var _that = this;
  return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      var total = args.concat(newArgs);
      if(!arguments.length) {
          var result = 1;
          for(var i = 0; i < total.length; i++) {
              result *= total[i];
          }
          return result;
      }
      else {
          return add.apply(_that, total);
      }
  }
}

add(1)(2)(3)(); // 6
console.log(add(1)(2)(3)())
add(1, 2, 3)(); // 6

