/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-09 16:00:34
 * @LastEditTime: 2022-04-09 16:00:34
 */
// 摩尔投票法
// 空间复杂度O(n)，时间复杂度O(1)
var majorityElement = function(nums) {
    let x = 0, vote = 0, count = 0
    // 1. 核心代码：票数正负抵消
    // 候选答案数和其他数两两抵消，剩下的数组答案数不变，抵消为0时重新选取
    for(let num of nums){
        if(vote == 0)
            x = num
        vote += x === num ? 1:-1
    }
    //2. 验证x是否是数组出现长度超过一半的数，是的话直接返回，不是返回0
    for(let num of nums)
        if(x === num)
            count++
    return count > nums.length / 2 ? x:0
};