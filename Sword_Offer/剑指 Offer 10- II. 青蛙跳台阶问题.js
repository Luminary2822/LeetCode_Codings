/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-24 14:40:15
 * @LastEditTime: 2022-04-24 14:41:28
 */
 // 动态规划
 var numWays = function(n) {
    let dp = new Array(n + 1)
    dp[0] = 1
    dp[1] = 1
    for(let i = 2;i <= n;i++)
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
    return dp[n]
};