/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-22 20:19:08
 * @LastEditTime: 2022-04-22 20:59:42
 */
// 法一：滑动窗口第一版本
var findContinuousSequence = function(target) {
    if(target < 2)  return []

    let nums = []
    for(let i = 1;i <= Math.ceil(target / 2);i++){
        nums.push(i)
    }
    let left = 0, right = 0
    let sum = 0
    let res = []
    while(right < nums.length){
        sum += nums[right]
        while(sum > target){
            sum -= nums[left]
            left += 1
        }
        if(sum < target){
            right += 1
            continue
        }
        res.push(nums.slice(left, right + 1))
        right += 1
    }
    return res
};

// 法二：滑动窗口第二版
 var findContinuousSequence = function(target) {
    // 至少有两个数
    if(target < 2)  return []

    // 记录1-target的中位数N
    N = Math.ceil(target / 2)
    // 声明双指针，不断滑动窗口
    let left = 1, right = 1
    let sum = 0
    let res = []

    // 右指针向前，判断窗口内的和与目标和的比较决定移动左指针
    while(right <= N){
        // 计算窗口内的和
        sum += right
        // 循环判断当前窗口内的和大于target，左指针向前
        while(sum > target){
            sum -= left
            left += 1
        }
        // 当前窗口内的和小于target，右指针继续向前走继续循环加
        if(sum < target){
            right += 1
            continue
        }
        // 找到符合题意的左右边界，将子数组加入结果数组
        let arr = []
        for(let i = left;i <= right;i++)
            arr.push(i)
        res.push(arr)
        right += 1
    }
    return res
};