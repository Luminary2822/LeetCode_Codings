/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-25 13:05:06
 * @LastEditTime: 2022-09-25 13:05:13
 */
// 背包问题
// 加法和 - （减法和） = target，加法和 - （sum - 加法和）= target，加法和 = (sum + target) / 2
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((a,b) => a + b)
    // nums元素之和小于target的绝对值，永远无法组合成target
    if(sum < Math.abs(target))
        return 0
    // (sum + target) / 2不为整数，也无法组合
    if((sum + target) % 2 === 1)
        return 0

    let halfSum = (sum + target) / 2
    // dp[i]表示装满容量为i的背包的方法数
    let dp = new Array(halfSum + 1).fill(0)
    // 背包为空时默认一种方法
    dp[0] = 1
    for(let i = 0;i < nums.length;i++){
        for(let j = halfSum;j >= nums[i];j--){
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[halfSum]
};