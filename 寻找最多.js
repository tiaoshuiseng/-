const searchMore = (arr) => {
    if(!Array.isArray(arr)) {
        return '请输入数组';
    }
    else if(arr.length === 0) {
        return '数组为空';
    } 
    let mostMore='';
    let maxTime = 0;
    arr.reduce((preValue, currentValue) => {
        preValue[currentValue] ? preValue[currentValue] += 1 : preValue[currentValue] = 1;
        if(preValue[currentValue]>maxTime) {
            mostMore = currentValue;
            maxTime=preValue[currentValue];
        }
        return preValue
    },{})
    return mostMore
}

console.log(searchMore([1,1,3,2,2,6,3,1,3,3]));