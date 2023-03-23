/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-24 16:50:55
 * @LastEditTime: 2022-04-24 16:50:55
 */
 // 深度优先搜索 + 剪枝
 var movingCount = function(m, n, k) {
    // 声明visited数组，初始化均为false
    let visited = new Array(m).fill(false)
    for(let i = 0; i < m;i++)
        visited[i] = new Array(n)
    
    // 求num按位相加的和，这里用于求坐标的数位和
    function sum(num){
        let total = 0
        while(num){
            total += num%10
            num = Math.floor(num / 10)
        }
        return total
    }

    function dfs(i, j){
        // 索引越界，位置的数位和大于k，已经遍历过-剪枝提前返回0
        if(i >= m || j >= n || sum(i) + sum(j) > k || visited[i][j])
            return 0
        // 符合条件的格子标记已遍历
        visited[i][j] = true
        // 继续递归，搜索方向可以优化成向下和向右，格子数+1
        return 1 + dfs(i + 1,j) + dfs(i, j + 1)
    }
    
    return dfs(0,0)
};