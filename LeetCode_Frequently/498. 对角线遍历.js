/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-05-27 22:59:35
 * @LastEditTime: 2022-05-27 22:59:43
 */
// 两步走战略
// 寻找对角线上元素i和j组合的唯一值作为键，将对角线上的数据存储为该键的值
// 按照题目的输出方向来输出
var findDiagonalOrder = function(mat) {
    // 收集/方向上的对角线，值数组存储时按照右上到左下的顺序
    // 根据矩阵特点，对每一条对角线来说，i+j的值是唯一的
    var map = {}
    for(let i = 0;i < mat.length;i++){
        for(let j = 0;j < mat[0].length;j++){
            if(!map[i+j]) map[i+j] = []
            map[i+j].push(mat[i][j])
        }
    }
    // 按照要求的方向输出
    let count = 1 // 初始为奇数对角线
    let res = []
    for(let key in map){
        // 奇数对角线，输出顺序应该为左下到右上，值倒序输出
        if(count & 1){
            for(let j = map[key].length - 1;j >= 0;j--)
                res.push(map[key][j])
        }
        // 偶数对角线，输出顺序应该为右上到左下，值顺序输出
        else{
            for(let j = 0;j < map[key].length;j++)
                res.push(map[key][j])
        }
        count++
    }
    return res
};