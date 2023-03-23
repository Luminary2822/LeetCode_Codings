/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-11 19:41:29
 * @LastEditTime: 2022-04-11 19:43:52
 */
// 标志位法：从右上角出发，想变大向下走，想变小向左走
// 时间复杂度：O(n+m)
// 空间复杂度：O(1)
var findNumberIn2DArray = function(matrix, target) {
    // 特判
    if(matrix.length == 0 || matrix[0].length == 0)
        return false
    let m = matrix.length, n = matrix[0].length
    
    // 右上角
    let row = 0, col = n - 1
    while(row < m && col >= 0){
        // 当前数小于target，去更大数的地方要向下走，行数加一
        if(matrix[row][col] < target)
            row += 1
        // 当前数大于target，去更小数的地方要向左走，列数减一
        else if (matrix[row][col] > target)
            col -= 1
        // 当前数刚好=target，找到啦
        else
            return true
    }
    // 走完循环了还没找到就false
    return false
};