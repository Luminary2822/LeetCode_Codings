// 动态规划
// 时间复杂度和空间复杂度均为O(mn)
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length
    let n = text2.length
    
    // dp[i][j] 表示text1[0:i-1]和text2[0:j-1]的最长公共子序列，dp[0][0] = 0
    // 多声明一个长度便于i=0或者j=0时，空串和另一个字符串的匹配
    // 使用数组填充数组构建二维数组一个很简便的写法
    let dp = Array.from(Array(m+1), () => Array(n+1).fill(0));
    
    for(let i = 1;i < m + 1;i++){
        for(let j = 1;j < n + 1;j++){
            // 两个子字符串的最后一位相等，所以最长公共子序列又增加了 1
            if(text1[i - 1] == text2[j - 1]){
                dp[i][j] = dp[i-1][j-1] + 1
            }
            else{
                // # 两个子字符串的最后一位不相等，此时目前最长公共子序列长度为两个字符串其中之一去除当前不相等字符前面子串与另一字符串的匹配
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
};