/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-08-01 20:43:28
 * @LastEditTime: 2022-08-01 20:43:35
 */
// 动态规划
var climbStairs = function(n) {
    let dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for(let i =3 ;i < n + 1;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};