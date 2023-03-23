/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-02 14:51:27
 * @LastEditTime: 2022-07-04 21:20:59
 */
// 动态规划，和I不同的就是首尾不能同时偷
// 核心：将环拆成两个队列，[0,n-1) and [1,n)取最高金额
var rob = function(nums) {
    let n = nums.length
    if(n <= 1)
        return n == 0? 0:nums[0]
    return Math.max(robI(nums.slice(0, n-1)), robI(nums.slice(1, n)))
    // 这是打家劫舍I
    function robI(nums){
        let n = nums.length
        let dp = new Array(n)
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        for(let i = 2;i < nums.length;i++){
            dp[i] = Math.max(dp[i-2] + nums[i],dp[i-1])
        }
        return dp[n-1]
    }
};
rob([1,2,3])