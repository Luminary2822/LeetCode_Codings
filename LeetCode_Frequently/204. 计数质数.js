/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-07 21:30:23
 * @LastEditTime: 2022-06-07 21:30:34
 */
 // 埃氏筛
 var countPrimes = function(n) {
    // 设置一个数组，初始化为true
    let isPrime = new Array(n).fill(true)
    let res = 0
    for(let i = 2;i < n;i++){
        // 从2开始，是true表示是质数结果+1
        if (isPrime[i])
            res += 1
            // 将该质数的倍数设置为false非质数，从i*i开始，因为小于i的都在前面筛过了
            for(let j = i * i;j < n;j += i){
                isPrime[j] = false
            }
    }
    return res
};