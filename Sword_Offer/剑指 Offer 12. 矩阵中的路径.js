/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-17 16:51:48
 * @LastEditTime: 2022-04-17 16:51:49
 */
// 深度优先搜索回溯算法
var exist = function(board, word) {
    // 深度优先搜索
    function dfs(i, j, k){
        // 如果越界(行或列) 或 匹配到的字符与 word 当前遍历到的下标不同，直接返回
        if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k])
            return false
        // 如果长度相同，说明找到该路径了
        if(k == word.length - 1)
            return true

        // 置空表明遍历过当前字符
        let temp = board[i][j]
        board[i][j] = ' '

        // 上下左右四个方向dfs搜索
        let res = dfs(i - 1,j, k + 1) || dfs(i+1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1)
        // 回溯的时候把标记位复原，此时的temp也是word[k]
        board[i][j] = temp
        return res
    }

    let m = board.length
    let n = board[0].length
    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            if(dfs(i, j, 0))
                return true
        }
    }
    return false
};