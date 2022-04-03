// const str = 'abcdefg';
// var reg = /a/;
// const a = str.replace(reg, 'w')
// console.log(a);
function numberThousands(number, thousandsSeperator = ",") {
  const s = String(number);
  let r = "";
  for (let i = s.length - 1; i >= 0; i--) {
    const seperator = (s.length - i - 1) % 3 ? "" : thousandsSeperator;
    r = `${s[i]}${seperator}${r}`;
  } 
  return r.slice(0, -1);
}
console.log(numberThousands(1234567));

// 先遍历，然后从右往左，每三个加个逗号