function deepClone(obj) {
    let emptyObj = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            if(typeof key === 'object') {
                deepClone(key);
            }else {
                emptyObj[key] = obj[key];
            }
        }
    }
}

// let arr = ['a', 'b', 'c'];
// arr[3] = 'd'
// for(var key in arr) {
//     console.log(key);
//     console.log(arr.hasOwnProperty(key));
// }

// console.log(arr);