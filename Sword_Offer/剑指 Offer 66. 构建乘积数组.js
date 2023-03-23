/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-12 22:17:51
 * @LastEditTime: 2022-04-12 22:25:41
 */
// 利用索引左侧所有数字乘积与右侧所有数字乘积相乘，即可得到答案
var constructArr = function(a) {
    N = a.length
    let left = new Array(N).fill(0)
    let right = new Array(N).fill(0)
    let res = new Array(N).fill(0)

    // 求左右乘积列表
    // 索引0的左侧没有元素，所以初始化为1
    left[0] = 1
    for(let i = 1;i < a.length;i++)
        // 索引i-1的左侧乘积乘以索引i-1对应的数a[i-1]
        left[i] = left[i-1] * a[i-1] 
        
    // 索引N-1的右侧没有元素，所以初始化为1
    right[N-1] = 1
    for(let i = N - 2;i > -1; i--)
        // /索引i+1的右侧乘积乘以索引i+1对应的数a[i+1]
        right[i] = right[i+1] * a[i+1]
    
    for(let i = 0;i < a.length;i++)
        res[i] = left[i] * right[i]
    return res
};