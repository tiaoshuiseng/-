// 随机生成六位数的验证码思路
// 设置一个六位数，内容全为1的数组[1, 1, 1, 1, 1, 1]
// 然后遍历这六个数字，每个数乘以[0,9]随机一个

function randomAutu() {
  let arr = [1, 1, 1, 1, 1, 1];
  let newarr = arr.map((value) => value * Math.floor(Math.random() * 10));
  return newarr;
}

console.log(randomAutu());