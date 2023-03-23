/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-03 22:13:38
 * @LastEditTime: 2022-07-03 23:00:13
 */
// 直接划
var findMaxAverage = function (nums, k) {
    let left = 0, right = 0
    let maxSum = 0
    let res = -Infinity
    while(right < nums.length){
        maxSum += nums[right]
        while(right - left + 1 > k){
            maxSum -= nums[left]
            left += 1
        }
        // 满足长度为k的
        if(right - left + 1 == k)
            res = Math.max(res, maxSum)
        right += 1
    }
    return res / k
};


// 先取前k个的和，后面窗口划动加上新的减去旧的，实时记录最大值
var findMaxAverage = function (nums, k) {
    let n = nums.length
    let maxSum = 0
    for(let i = 0;i < k;i++) {
        maxSum += nums[i]
    }
    let res = maxSum //先获取第一个连续k个值的和
    for(let i = k;i < n;i++) {
        maxSum = maxSum +  nums[i] - nums[i-k]
        res = Math.max(res,maxSum)
    }
    return res/k
};