/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-20 21:52:26
 * @LastEditTime: 2022-09-20 21:55:13
 */
// 动态规划
var longestPalindrome = function(s) {
    let n = s.length;
    let res = '';
    // dp[i][j]表示子串i～j是否是回文子串
    let dp = Array.from(new Array(n),()=>new Array(n).fill(false))
    for(let i = n - 1;i >= 0; i--){
        for(let j = i;j < n;j++){
            // 回文子串必须满足s[i]，s[j]相等，并且向内扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1])
            // 当前回文子串比之前的大，更新最长回文子串
            if(dp[i][j] && j - i + 1 > res.length){
                res = s.substring(i, j + 1)
            }
        }
    }
    return res
};