// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.sort((x, y) => Math.random() - 0.5));
// 
// console.log(new Array(100).fill(1))

const arr = [1, 2, 3, 4, 5, 6];


function randomChoose(params) {
    let len = params.length;
    let result = [...params];
    for(let i = 0; i < params.length; i++) {
        let randomIndex = Math.floor(Math.random() * (len-i-1)) + i;
        console.log('randomIndex',randomIndex);
        [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
    }
    return result;
}

console.log(randomChoose(arr));