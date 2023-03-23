var removeDuplicates = function(nums) {
    let n = nums.length
    if(n <= 2)
        return n
    // 左指针指向当前即将放置元素的位置，右指针向后遍历所有元素指向待检查元素
    let left = 2, right = 2
    while(right < n){
        if(nums[right] != nums[left - 2]){
            nums[left] = nums[right]
            left += 1
        }
        // 如果遇到不满足条件的重复元素，则left不动，right指针继续向后，寻找符合条件放入left
        right += 1
    }
    return left
};