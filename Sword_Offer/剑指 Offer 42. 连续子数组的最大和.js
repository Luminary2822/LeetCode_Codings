/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-07 13:08:04
 * @LastEditTime: 2022-04-07 13:21:09
 */
// 法一：动态规划
// dp[i]表示以nums[i]为结尾的最大子数组和
var maxSubArray = function(nums) {
    var dp = new Array(nums.length).fill(0);
    dp[0] = nums[0]
    for(let i = 1;i < nums.length;i++){
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
    }
    return Math.max(...dp)
};
// 法一如果不用ES6的...dp的写法的话，就实时记录最大值增加max
var maxSubArray = function(nums) {
    var dp = new Array(nums.length).fill(0);
    let max = nums[0]
    dp[0] = nums[0]
    for(let i = 1;i < nums.length;i++){
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
        // 记录dp数组的最大值
        max = Math.max(max, dp[i])
    }
    return max
};
// 法二：前缀和
// 计算前缀和，实时更新最值，当前缀和小于0时重新计算
var maxSubArray = function(nums) {
    let preSum = 0
    let maxPreSum = nums[0]
    for(let num of nums){
        preSum += num
        maxPreSum = Math.max(maxPreSum, preSum)
        if(preSum < 0) preSum = 0
    }
    return maxPreSum
};