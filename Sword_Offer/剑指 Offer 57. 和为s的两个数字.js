/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-09 16:56:22
 * @LastEditTime: 2022-04-09 17:16:03
 */

// 法一：双指针
// 时间复杂度 O(N) 空间复杂度O(1)
var twoSum = function(nums, target) {
    let left = 0, right = nums.length-1, temp_sum = 0
    while(left < right){
        temp_sum = nums[left] + nums[right]
        if(temp_sum > target)
            right -= 1
        else if(temp_sum < target)
            left += 1
        else
            return [nums[left], nums[right]]
    }
};

// 法二：因为数组有序，所以可以使用二分法查找另外一个数，特意练习了一下二分法
// 二分法
// 时间复杂度O(NLogN)，空间复杂度O(1)
var twoSum = function(nums, target) {
    for(let num of nums){
        num2 = target - num
        let low = 0
        let high = nums.length - 1
        // 二分查找另一个数
        while(low <= high){
            let mid = low + Math.floor((high - low) / 2)
            if(nums[mid] < num2)
                low = mid + 1
            else if(nums[mid] > num2)
                high = mid - 1
            else
                return [num, num2]
        }
    }
};

// 法三：开始没有注意数组是有序的，所以上来就想起来两数之和的方法了，但是那道题数组是无序的
// 本题数组有序，所以这种解法一定不是最优解
// 哈希表：时间O(N)，空间O(N)
var twoSum = function(nums, target) {
    var dict = new Map()
    for(let i = 0;i < nums.length;i++)
    {
        nums_other = target - nums[i]
        if(nums_other in dict)
            return [nums[i], nums_other]
        else
            dict[nums[i]] = i
    }
};

