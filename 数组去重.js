const arr = [1, 1, 3, 2, 6, 1, 3, 10, 11, 6];
// 第一种
// console.log([...new Set(arr)]);

// 第二种
const FilterArray = (arr) => {
  if(!Array.isArray(arr)) {
    throw new Error('请输入数组')
  }
  let result = [];
  arr.forEach((value) => {
    if(result.length===0) {
      result.push(value)
    }else {
      let flag = result.some((item) => {
        return item === value
      })
      if(flag) {
        return false
      }
      result.push(value)
    }
  })
  return result
}

// 用对象属性来判断

const FilterArrayByObj = (arr) => {
  if(!Array.isArray(arr)) {
    throw new Error('请输入数组')
  }
  let result = [];
  let obj = {};
  for(let i = 0; i < arr.length - 1; i++) {
    if(!obj[arr[i]]) {
      obj[arr[i]] = 1;
      result.push(arr[i])
    }
  }
  return result
}

// 用indexof

// FilterArray({a:1,b:2})
console.log(FilterArrayByObj(arr));