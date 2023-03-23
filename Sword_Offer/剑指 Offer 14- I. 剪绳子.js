/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-24 15:11:35
 * @LastEditTime: 2022-04-24 15:18:26
 */
// 动态规划
var cuttingRope = function(n) {
    // dp[i]表示长度为i的绳子剪成至少两段后的最大乘积
    let dp = new Array(n+1).fill(0)
    // 初始化绳子长度从2开始，因为长度为0和1的绳子没有意义
    dp[2] = 1
    for(let i = 2;i <= n;i++){
        for(let j = 1;j < i;j++){
            // 剪了j之后，剩下的i-j可以剪可以不剪，不剪就是j*(i-j)，剪就是j*dp[i-j]，取两者最大值
            // 对于每一个i，内层循环不同的j会拿到一个max，记录一个最大的max作为dp[i]
            dp[i] = Math.max(dp[i], Math.max(j*(i-j), j*dp[i-j]))
        }
    }
    return dp[n]
};
// 贪心算法
// 核心思路是：尽可能把绳子分成 长度为3的小段，这样乘积最大。
var cuttingRope = function(n) {
    if(n < 4) return n - 1;
    let res = 1;
    // 不断分出长度为3的小段乘入res，绳子长度不断减小
    while(n > 4) {
        res *= 3;
        n -=3;
    }
    // 最后返回时乘以小于等于4的最后一小段
    return res * n;
};