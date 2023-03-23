//  二分查找，时间复杂度O(logn)
var searchRange = function(nums, target) {
    // 查找target的右边界
    function findtarget(target){
        let low = 0, high = nums.length - 1
        while(low <= high){
            let mid = low + Math.floor((high - low) / 2)
            if(nums[mid] <= target)
                low = mid + 1
            else
                high = mid - 1
        }
        return low
    }
    // target - 1的右边界即为target的开始位置，target的右边界-1即为target的结束位置
    let startIndex = findtarget(target - 1)
    let rightIndex = findtarget(target) - 1
    // 如果target不存在则返回[-1,-1]
    if(startIndex == nums.length  || nums[startIndex] != target)
        return [-1,-1]
    // 存在则返回结果
    return [startIndex, rightIndex]
        
};









//  双指针，时间复杂度O(n)
var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        while(left < right && nums[left] < target) left++
        while(left < right && nums[right] > target) right--
        if(nums[left] == target && nums[right] == target)
            return [left,right]
        else
            break
    }
    return [-1,-1]
};