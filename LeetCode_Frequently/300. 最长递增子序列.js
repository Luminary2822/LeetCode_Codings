var lengthOfLIS = function(nums) {
    // 特殊情况：如果数组长度小于等于1的话，直接返回数组长度
    if(nums.length <= 1)
        return nums.length
    // dp[i]表示以nums[i]结尾的最长递增子序列的长度，初始化为1
    let dp = new Array(nums.length).fill(1)
    let res = 0
    for(let i = 1;i < nums.length;i++){
        for(let j = 0;j < i;j++){
            if(nums[j] < nums[i]){
                // dp[i]等于j从0到i-1各个位置的最长升序子序列 + 1 的最大值
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        // 实时记录更新最大长度
        res = Math.max(res, dp[i])
    }
    return res
};