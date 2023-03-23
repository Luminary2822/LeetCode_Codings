/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-20 19:19:06
 * @LastEditTime: 2022-09-20 19:19:21
 */
// 动态规划，不需要重新开设数组，可以直接修改表格里面的数据记录路径之和
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            // 左上角和第一行第一列单独判断
            if(i == 0 && j == 0) continue
            else if(i == 0) grid[i][j] = grid[i][j - 1] + grid[i][j]
            else if(j == 0) grid[i][j] = grid[i - 1][j] + grid[i][j] 
            // 其它位置根据动态路径转移方程更新路径和，来自左边或者上面的最小值加上当前的值
            else grid[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + grid[i][j]
        }
    }
    return grid[m-1][n-1]

};