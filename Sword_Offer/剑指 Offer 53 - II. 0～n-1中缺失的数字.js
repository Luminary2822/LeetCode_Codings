/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-10 21:05:42
 * @LastEditTime: 2022-04-10 21:05:43
 */
//  二分查找：寻找首位下标和数字不相等的元素，下标即为其缺失的数字
var missingNumber = function(nums) {
    let low = 0, high = nums.length -1
    while(low <= high){
        let mid = low + Math.floor((high - low) / 2)
        // 如果相等说明 left 到 mid 中间肯定不少元素 所以往右边二分查找
        if(nums[mid] == mid)
            low = mid + 1
        // 如果不相等说明 left 到 mid 中间少元素 所以往左边二分查找
        else
            high = mid - 1
    }
    return low
};