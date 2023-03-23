/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-07 16:40:23
 * @LastEditTime: 2022-06-07 16:40:50
 */
// 法一：DFS深度优先搜索
var numIslands = function(grid) {
    let islandNum = 0
    for(let i = 0;i < grid.length;i++){
        for(let j = 0;j < grid[0].length;j++){
            // 遇到岛，开始深度优先搜索
            // 最终岛屿的数量就是深度优先搜索的次数
            if(grid[i][j] == '1'){
                infect(grid, i, j)
                islandNum ++
            }
        }  
    }
    return islandNum
    // 递归标注，将所有相连的1都标注成2避免重复计算
    function infect(grid, i, j){
        // 如果超过边界或者当前不是1，则返回
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != '1')
            return 
        // 将1改成2
        grid[i][j] = '2'
        infect(grid, i + 1, j)
        infect(grid, i - 1, j)
        infect(grid, i, j + 1)
        infect(grid, i, j - 1)
    }
};