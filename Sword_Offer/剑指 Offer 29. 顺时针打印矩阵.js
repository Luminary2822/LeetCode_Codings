/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-06 19:10:25
 * @LastEditTime: 2022-04-06 19:29:49
 */
//  法一：模拟打印顺序顺时针遍历
var spiralOrder = function(matrix) {
    if(matrix.length == 0) return []
    let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1
    let res = []
    while(true){
        // Left to right
        for(let i = l; i <= r ; i++) res.push(matrix[t][i])
        t += 1
        if(t > b) break
        // Top to bottom
        for(let i = t; i <= b; i++) res.push(matrix[i][r])
        r -= 1
        if(l > r) break
        // right to left
        for(let i = r; i >= l; i--) res.push(matrix[b][i])
        b -= 1
        if(t > b) break
        // bottom to top
        for(let i = b; i >= t; i--) res.push(matrix[i][l])
        l += 1
        if(l > r) break
    }
    return res
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

