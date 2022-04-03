Array.prototype.sample = function () {
  if (!Array.isArray(this)) {
    throw new Error("not a Array");
  }

  return this[Math.floor(Math.random() * this.length)];
};
let arr = [1, 2, 3, 4];
console.log(arr.sample());