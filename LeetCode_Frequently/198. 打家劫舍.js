/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-02 14:37:05
 * @LastEditTime: 2022-07-02 14:50:35
 */
//  动态规划
var rob = function(nums) {
    let n = nums.length
    // dp[i]表示偷到第i家可以获得最高金额
    let dp = new Array(n)
    // 初始化，第一家直接偷是最高的
    dp[0] = nums[0]
    // 第二家取决于只偷第一家最高还是只偷第二家最高
    dp[1] = Math.max(nums[0],nums[1])
    for(let i = 2;i < nums.length;i++){
        // 第i家 = 偷i-2家+当前第i家 和 偷i-1家的最大金额
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    return dp[n-1]
};