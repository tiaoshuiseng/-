// 实现 intersection，取数组交集
//=> [2]
// intersection([2, 1], [2, 3]);

//=> [1, 2]
// intersection([1, 2, 2], [1, 2, 2]);

//=> [1, 2]
// intersection([1, 2, 2], [1, 2, 2], [1, 2]);

// 传来的参数使用reduce方法，两两相比，后面的使用filter，来筛选出前面的存在与后的相同的值即可
// 最后 去重一下。 但是这个方法时间复杂度肯定很高，因为使用了很多循环

function intersection(...list) {
  
  const finResult = list.reduce((preValue, curValue) => {
    return curValue.filter((value) => {
      return preValue.includes(value)
    })
  })
  return [... new Set(finResult)]
}

// console.log(intersection([1, 2, 2], [1, 2, 2], [1, 2]));

console.log(intersection([1, 2, 2], [1, 2, 2]));