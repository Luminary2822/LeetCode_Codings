// 双指针
var removeDuplicates = function(nums) {
    let left = 0,right = 0
    for(right = 1;right < nums.length;right++){
        // 右指针遇到新的不重复的数时，就放在左指针后面
        if(nums[left] !== nums[right]){
            nums[left + 1] = nums[right]
            left ++
        }
        // 遇到重复的数字就跳过，right指针继续向前
        continue
    }
    // // left指向前面不重复数字的最后一位，right指向nums数组的最后一位，将left后面的数字全部删除
    // nums.splice(left + 1,right - left)
    // left + 1即为去重后数组的长度
    return left + 1
};