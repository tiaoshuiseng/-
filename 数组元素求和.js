var arr=[1,2,3,[[4,5],6],7,8,9]
console.log(arr.toString().split(',').reduce((preValue, currentValue) => {
    return preValue + Number(currentValue)
},0));