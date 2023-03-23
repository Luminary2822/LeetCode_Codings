/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-24 13:55:06
 * @LastEditTime: 2022-04-24 13:55:07
 */
// 动态规划
var fib = function(n) {
    if(n <= 1)
        return n
    let dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    for(let i = 2;i <= n;i++){
        dp[i] = (dp[i-1] + dp[i-2])% 1000000007
    }
    return dp[n]
};