/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-18 22:36:48
 * @LastEditTime: 2022-06-18 22:39:24
 */
// 深度优先搜索
var maxAreaOfIsland = function(grid) {
    let area = 0
    for(let i = 0;i < grid.length;i++){
        for(let j = 0;j < grid[0].length;j++){
            if(grid[i][j] == '1'){
                // 求所有岛屿中的面积最大值
                area = Math.max(dfs(grid,i,j), area)
            }
        }
    }
    return area
    // 寻找连在一起的岛屿, 更新最大值
    function dfs(grid, i, j){
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != '1')
            return 0
        // 标记访问过的岛屿, 不会重复访问
        grid[i][j] = '2'
        let count = 1
        count += dfs(grid, i + 1, j)
        count += dfs(grid, i - 1, j)
        count += dfs(grid, i, j + 1)
        count += dfs(grid, i, j - 1)
        return count
    }
};