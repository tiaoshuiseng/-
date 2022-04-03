var arr = [[1,2,,[3,4]], [4, 5, 6], [7, 8, 9]];
console.log(arr.flat());

// 数组扁平化处理
// flat Array.flat(x)   可以存传参数表示扁平化几层 默认一层
// 如果要全部展开，参数参infinity  表示全部展开


// 使用reduce 和 concat  只能展开第一层
// let newArr = arr.reduce((pre, now) => pre.concat(now), [])
// console.log(newArr);


const definedFlat = (arr) => {
    let newArr=[];
    (function realFlat(arr) {
        arr.forEach(element => {
            if(Array.isArray(element)) {
                realFlat(element)
            }else {
                newArr.push(element)
            }
        });
    })(arr)
    
    return newArr
}
// console.log('definedFlat', definedFlat([[1,2,3], [4, 5, [6, 7, 8]], [9, 10, 11]]));
// 使用reduce
const flatten = (arr) => {
    return arr.reduce((preValue, currentValue) => {
        return preValue.concat(Array.isArray(currentValue) ? flatten(currentValue) : currentValue)
    },[])
}

// console.log('flatten', flatten([[1,2,3], [4, 5, [6, 7, 8]], [9, 10, 11]]));