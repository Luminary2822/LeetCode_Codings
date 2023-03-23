/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-03 20:16:37
 * @LastEditTime: 2022-04-03 20:41:25
 */
// 法一：用 &1 判断奇偶数，奇数则添加在数组前面unshift，偶数则添加在数组后面push
// 时间复杂度：O(n)，空间复杂度：O(n)
var exchange = function(nums) {
    let res = []
    for(let num of nums){
        if(num & 1 == 1)
            res.unshift(num)
        else
            res.push(num)
    }
    return res
};
// 法二：首尾双指针，时间复杂度：O(n)，空间复杂度：O(1)
var exchange = function(nums) {
    let left = 0
    let right = nums.length - 1
    while(left < right){
        // 左指针寻找到一个偶数
        while(nums[left] % 2 == 1 && left < right)
            left ++
        // 右指针寻找到一个奇数
        while(nums[right] % 2 == 0 && left < right)
            right --
        // 交换
        [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    return nums
};
// 法三：快慢双指针，时间复杂度：O(n)，空间复杂度：O(1)
var exchange = function(nums) {
    // 快慢指针均从数组头部开始遍历
    let slow = 0
    let fast = 0
    while(fast < nums.length){
        // fast遇到奇数则和slow交换，slow++
        if(nums[fast] % 2 == 1){
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow ++
        }
        // fast没有遇到奇数继续++
        fast ++
    }
    return nums
};
