var findNumberOfLIS = function(nums) {
    // 特判
    if(nums.length <= 1) return 1

    // dp[i]表示以nums[i]结尾的最长递增子序列长度
    // count[i]表示以nums[i]结尾的最长递增子序列个数
    let dp = new Array(nums.length).fill(1)
    let count = new Array(nums.length).fill(1)
    // 记录最长递增子序列的长度
    let maxLength = 0

    for(let i = 1;i < nums.length;i++){
        for(let j = 0;j < i;j++){
            if(nums[j] < nums[i]){
                // 找到一个更长的子序列
                if(dp[j] + 1 > dp[i]){
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                } 
                // 找到了两个相同长度的递增子序列
                else if (dp[j] + 1 == dp[i]){
                    count[i] += count[j]
                }
            }
        }
        maxLength = Math.max(maxLength, dp[i])
    }
    // 统计最长递增子序列共有几个
    let res = 0
    for(let i = 0;i < nums.length;i++){
        if(dp[i] == maxLength)
            res += count[i]
    }
    return res
};