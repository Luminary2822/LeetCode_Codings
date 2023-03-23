/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-09 17:50:25
 * @LastEditTime: 2022-04-11 19:22:40
 */
//  二分查找优化版：时间复杂度: O(logn)，空间复杂度: O(1)
var search = function(nums, target) {
    // 查找数字tar在数组nums中的插入点，若存在相同元素则插入右边，即寻找tar的右边界
    var help = tar =>{
        let low = 0, high = nums.length-1
        while(low<=high){
            let mid = low + Math.floor((high - low)/2)
            if(nums[mid] <= tar)
                low = mid + 1
            else
                high = mid - 1 
        }
        return low
    };
    // 分别查找target的右边界和target-1的右边界，相减即为结果
    return help(target) - help(target-1)
};

// 二分查找未优化版本：查找target的左右边界 
var search = function(nums, target) {
    // 搜索右边界
    let low = 0, high = nums.length - 1
    while(low <= high){
        let mid = low + Math.floor((high - low) / 2)
        // nums[mid] = target时，右边界在[mid+1, high]中，所以查找右边界，=后执行low = mid + 1
        if(nums[mid] <= target)
            low = mid + 1
        else
            high = mid - 1     
    }
    // 跳出时low指向右边界
    let right = low

    // 若数组没有target，则提前返回
    if(high >= 0 && nums[high] !== target)
        return 0

    // 搜索左边界
    low = 0, high = nums.length - 1
    while(low <= high){
        let mid = low + Math.floor((high - low) / 2)
        // nums[mid] = target时，左边界在[low, mid-1]中，所以查找左边界，=后执行high = mid - 1
        if(nums[mid] < target)
            low = mid + 1
        else
            high = mid - 1  
    }
    // 跳出时high指向左边界
    let left = high
    return right - left - 1
};


// 二分查找最容易理解版：先找到mid，左右边界不断逼近targe位置的那几个下标
var search = function(nums, target) {
    let low = 0, high = nums.length - 1
    while(low <= high){
        let mid = low + Math.floor((high - low) / 2)
        if(nums[mid] < target)
            low = mid + 1
        else if(nums[mid] > target)
            high = mid - 1
        // 此时nums[mid]==target
        else{
            if(nums[low] != target)
                low += 1
            else if(nums[high] != target)
                high -= 1
            else
                break
            }
    } 
    return high - low + 1
};

// res = search_2([5,7,7,8,8,10],8)