// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

// var rotate = function(nums, k) {
//     nums.unshift(...nums.splice(Math.abs(k%nums.length -nums.length)))
//    return nums
// };
var rotate = function(nums, k) {
    let step = 0;
    let mink = k%(nums.length);
    let right = nums.length;
    let temp
    while(step <= mink) {
        if(nums.length%2===1) {
            temp=nums[step+mink+1];
            nums[step+mink+1] = nums[step];
            nums[step] = temp;
            step++;
        }else {
            temp=nums[(step+mink+1)%nums.length];
            nums[step+mink+1] = nums[step];
            nums[step] = temp;
            step++;
        }
    }
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7], 5));