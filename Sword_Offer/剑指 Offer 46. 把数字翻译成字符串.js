/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-23 14:42:46
 * @LastEditTime: 2022-04-23 14:46:32
 */
 // 动态规划，青蛙跳台阶的变形版，能否跳两层台阶：取决于当前位与前一位数能否组合翻译
 var translateNum = function(num) {
    // 将当前的数转换成字符串再分解成字符数组
    let list_num = num.toString().split('')
    let N = list_num.length
    // dp数组初始化为0
    let dp = new Array(N).fill(0)

    // 第一位数字只有一种翻译方法
    dp[0] = 1
    // 第二位数组取决和前一位数字的组合是否超过25，超过25则只有一种翻译，未超过有两种翻译
    dp[1] = parseInt(list_num[0] + list_num[1]) > 25 ? 1:2

    // dp[i]表示以list_num[i]结尾的数字有多少种翻译
    for(let i = 2; i < N; i++){
        // 判断和前一位的数字组合成的两位数是否小于10或者大于25
        let flag = parseInt(list_num[i-1] + list_num[i])
        if(flag < 10 || flag > 25)
            // 小于10或者大于25的情况下，当前位数字只能单位翻译，方法数等于前一位的方法数
            dp[i] = dp[i-1]
        else
            // 大于10且小于25，当前位数组单位翻译时，方法数是dp[i-1]，当前位和前一位组合翻译时，方法数为dp[i-2]
            // 两种情况方法数累加
            dp[i] = dp[i-1] + dp[i-2]
    }
    // 字符数组最后一位的翻译方法数就是num数字的翻译方法数
    return dp[N-1]
};