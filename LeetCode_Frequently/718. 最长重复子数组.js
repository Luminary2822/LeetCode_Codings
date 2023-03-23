// 子数组要连续，子序列不用连续
var findLength = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    // dp[i][j]表示nums[0:i-1]和nums2[0:j-1]的最长重复子数组的长度
    let dp = Array.from(Array(m + 1), ()=> Array(n + 1).fill(0))
    // 初始化最大长度为0
    let res = 0
    for(let i = 1;i < m + 1;i++){
        for(let j = 1;j < n + 1;j++){
            // 当前数字相同，则最长重复子数组长度+1，实时记录长度
            if(nums1[i-1] == nums2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
                res = Math.max(res, dp[i][j])
            }
            // 当前数字不同，子数组就断开了，所以dp[i][j]就为0。子序列则不一样
        }
    }
    return res
};