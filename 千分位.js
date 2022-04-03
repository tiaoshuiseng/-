function qian(number) {
  const stringNumber = String(number);
  let part = '';
  for(let i = stringNumber.length - 1; i >= 0; i--) {
    const selectOne = (stringNumber.length - i - 1) % 3 ? '' : ',';
    console.log(stringNumber[i]);
    part = `${stringNumber[i]}${selectOne}${part}`
  }
  console.log('part',part.slice(0,-1));
}

// function numberThousands(number, thousandsSeperator = ",") {
//   const s = String(number);
//   let r = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     const seperator = (s.length - i - 1) % 3 ? "" : thousandsSeperator;
//     r = `${s[i]}${seperator}${r}`;
//   }
//   return r.slice(0, -1);
// }
qian(123456789)
// console.log();