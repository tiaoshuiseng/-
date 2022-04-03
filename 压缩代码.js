// function encode(str) {
//     const l = [];
//     let i = 0;
//     for (const s of str) {
//         const len = l.length;
//         const lastChar = len > 0 ? l[len - 1][0] : undefined;
//         if (lastChar === s) {
//             l[len - 1][1]++;
//         } else {
//             l.push([s, 1]);
//         }
//     }
//     return l.map((x) => x.join("")).join("");
// }
/**
 * @description 先设置一个空的数组，然后循环字符串，一开始就判断这个空数组是否为空，为空，就
 * 空数组的第一项为undefined，然后把这个被循环出来的字符串，以及1放到一个数组里面，然后push到这个空数组中
 */

function encode(str) {
    // 设置一个空数组，用来存放生成的新数组
    let emptyArr = [];
    for(const traversedValue of str) {
        let emptyArrLength = emptyArr.length;
        // 判断是不是第一次循环，是emptyArr第一项为undefined，不是，被比较的值campareValue为当前emptyArr最后一项的第一个值
        let campareValue = emptyArrLength > 0 ? emptyArr[emptyArrLength-1][0] : undefined;
        // 被比较的值和遍历的值如果相等
        if(campareValue === traversedValue) {
            // 直接使当前emptyArr最后一项数组的第二项即遍历的值和被遍历的值相等的个数
            emptyArr[emptyArrLength-1][1]++;
        }else {
            // 不是，则重新push一个数组到emptyArr中，并且初始充分数量为1
            emptyArr.push([traversedValue, 1]);
        }
    }
    return emptyArr.map(value => value.join("")).join("");
}

console.log(encode('aaaabbbbcccjddd'));


// 交换a，b的值  不使用中间变量
// a = a - b;
// b = a + b;
// a = a + b;