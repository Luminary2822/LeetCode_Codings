/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-18 23:16:47
 * @LastEditTime: 2022-06-18 23:16:59
 */
var maxProduct = function(nums) {
    // 使用两个变量来维护上一个数的最大、最小乘积
    // 要记录最小是因为有负数的存在
    let res = -Infinity, temp_max = 1, temp_min = 1
    for(let i = 0;i < nums.length;i++){
        // 如果当前数是负数，那么相乘之后之前最小会变最大，最大会变最小
        if(nums[i] < 0){
            [temp_max, temp_min] = [temp_min, temp_max]
        }
        temp_min = Math.min(temp_min * nums[i], nums[i])
        temp_max = Math.max(temp_max * nums[i], nums[i])
        res = Math.max(res, temp_max)
    }
    return res
};