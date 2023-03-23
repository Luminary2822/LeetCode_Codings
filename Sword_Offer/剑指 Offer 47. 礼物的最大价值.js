/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-15 18:52:21
 * @LastEditTime: 2022-04-15 18:52:25
 */
// 动态规划，dp[i][j]表示从左上角(0,0)走到(i,j)可以获得的最多价值
var maxValue = function(grid) {
    // 声明二维数组
    M = grid.length
    N = grid[0].length
    var dp = new Array(M).fill(0)
    for(let i = 0;i < M;i++)
        dp[i] = new Array(N)

    // 初始化
    dp[0][0] = grid[0][0]
    // 第一列的数据只来源于上方积累的价值+当前价值
    for(let i = 1;i < grid.length;i++)
        dp[i][0] = dp[i-1][0] + grid[i][0]
    // 第一行的数据只来源于左方积累的价值+当前价值
    for(let i = 1;i < grid[0].length;i++)
        dp[0][i] = dp[0][i-1] + grid[0][i]

    // 判断来自上方的价值高还是左方的价值高，再加上当前的价值
    for(let i = 1;i < grid.length;i++){
        for(let j = 1;j < grid[0].length;j++){
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]) + grid[i][j]
        }
    }
    // 返回一直到右下角积累的最多价值
    return dp[M-1][N-1]
};