/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-25 19:47:44
 * @LastEditTime: 2022-04-25 19:47:47
 */
 // 动态规划，在已经生成的丑数集合中乘以 [2, 3, 5] 而得到新的丑数
 /*
三个有序数组的无重复元素合并问题，利用三指针
A：{1*2，2*2，3*2，4*2，5*2，6*2，8*2，10*2......}
B：{1*3，2*3，3*3，4*3，5*3，6*3，8*3，10*3......}
C：{1*5，2*5，3*5，4*5，5*5，6*5，8*5，10*5......}
  */
var nthUglyNumber = function(n) {
    if(n < 0)
        return 0

    // dp[i]表示第i-1个丑数,dp[0]表示第一个丑数
    let dp = new Array(n).fill(1)
    // 利用三个指针维护三个有序数组
    let index2 = 0,index3 = 0,index5 = 0
    for(let i = 1;i < n;i++){

        // 比较三个指针所指的数哪个最小
        dp[i] = Math.min(dp[index2]*2, dp[index3]*3, dp[index5]*5)

        // 判断是谁计算的，谁指针就后移一位
        // 三个if的原因：三个链表可能有相同元素，所以只要是最小的，都要移动指针
        if(dp[i] === dp[index2]*2)
            index2 += 1
        if(dp[i] === dp[index3]*3)
            index3 += 1
        if(dp[i] === dp[index5]*5)
            index5 += 1
    }

    return dp[n-1]
};