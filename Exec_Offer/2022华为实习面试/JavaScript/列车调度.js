/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-16 14:31:46
 * @LastEditTime: 2022-04-16 20:56:36
 */
// 题目和参考链接：https://blog.csdn.net/qq_45159762/article/details/109224295

// 法一：数组 + 二分法，如果序列很长的话只存储每条道路的末尾最小序号
// 时间复杂度：O(nlog n)，空间复杂度：O(n)
var findDescSeqCount = function(nums){
    // 将每条道路的最小序号存储在数组中，是一个升序序列（可用二分）
    var saveMinNum = []
    // console.log(saveMinNum)
    for(let i = 0;i < nums.length;i++){
        // 二分法：查找数组中第一个比当前nums[i]大的数
        // 找到则替换该数，找不到则数组添加一个新的数
        let left = 0,right = saveMinNum.length-1
        while(left <= right){
            let mid = left + Math.floor((right - left)/2)
            if(saveMinNum[mid] > nums[i])
                right = mid - 1
            else if(saveMinNum[mid] <= nums[i])
                left = mid + 1
        }
        // 此时left指向nums如果要插入数组中的右边界位置，没有重复数字的情况也就是第一个比nums[i]大的数
        if(left != -1 && saveMinNum[left] >= nums[i]) 
        // 更新：用当前数作为这条道路的末尾
            saveMinNum[left] = nums[i]
        // 找不到则加入一条新的道路，末尾最小序号为当前数
        else
            saveMinNum.push(nums[i])
    }
    return saveMinNum.length
}

console.log(findDescSeqCount([8,4,2,5,3,9,1,6,7])) // 4

// 法二：动态规划，其实是在求解最长递减子序列的个数，由Dilworth定理，转化成求最长递增子序列的长度
// 时间复杂度：O(n^2)
var findDescSeqCount = function(nums){
    // dp[i]表示以nums[i]结尾的最长递增子序列的长度
    var dp = new Array(nums.length)
    let max_res = 0
    for(let i = 0;i < nums.length;i++){
        dp[i] = 1
        for(let j = 0;j < i;j++){
            if(nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1)
                // 实时记录dp数组的最大值
                max_res = Math.max(dp[i], max_res)
        }
    }
    return max_res
}
console.log(findDescSeqCount([8,4,2,5,3,9,1,6,7])) // 4
// console.log(findDescSeqCount([8,9,5,6,3,10,12]))  // 4

