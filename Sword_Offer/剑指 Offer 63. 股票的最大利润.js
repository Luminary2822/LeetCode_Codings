/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-11 20:56:29
 * @LastEditTime: 2022-04-11 21:24:51
 */

// 动态规划
// 时间复杂度O(n)，空间复杂度O(n)
var maxProfit = function(prices) {
    if(prices.length == 0) return 0
    // dp[i]表示前i天的最大利润
    N = prices.length
    var dp = new Array(N).fill(0)
    let min_price = prices[0]

    for(let i = 1;i < prices.length;i++){
        dp[i]= Math.max(dp[i-1], prices[i] - min_price)
        min_price = Math.min(prices[i], min_price)
    }
    return dp[N-1]
};

// 一次遍历：时间复杂度O(n)，空间复杂度O(1)
var maxProfit = function(prices) {
    let res = 0
    let min_price = prices[0]
    for(let price of prices.slice(1)){
        res = Math.max(res, price - min_price)
        min_price = Math.min(min_price, price)
    }
    return res
}