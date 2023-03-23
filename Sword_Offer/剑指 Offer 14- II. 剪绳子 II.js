/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-24 15:42:58
 * @LastEditTime: 2022-04-24 15:42:58
 */
 // 贪心+循环取余
 // 不能用动态规划，因为取余之后max函数不能用来比大小
 var cuttingRope = function(n) {
    if(n < 4) return n-1
    let res = 1
    while(n > 4){
        res = (res * 3) % 1000000007
        n -= 3
    }
    return res * n % 1000000007
};