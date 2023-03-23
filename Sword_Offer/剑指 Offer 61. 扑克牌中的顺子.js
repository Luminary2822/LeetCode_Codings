/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-10 21:21:36
 * @LastEditTime: 2022-04-10 21:49:43
 */

//  构成顺子条件：（1）无重复的牌（2）除大小王外，五张牌最大牌-最小牌 < 5即可构成顺子。
//  法一：集合 Set + 遍历，时间复杂度O(N)=O(5)=O(1)，空间复杂度O(N)=O(5)=O(1)，感觉比下面那个方法速度快呀
var isStraight = function(nums) {
    var s = new Set()
    let max_num = 0
    let min_num = 14
    for(let i = 0;i < nums.length;i++){
        if(nums[i] == 0) continue
        max_num = Math.max(max_num, nums[i]) 
        min_num = Math.min(min_num, nums[i]) 
        if(s.has(nums[i])) return false
        s.add(nums[i])
    }
    return max_num - min_num < 5
};

// 法二：排序 + 遍历，时间复杂度O(NlogN)=O(5)=O(1)，空间复杂度O(1)
var isStraight = function(nums) {
    // 数组排序
    nums.sort((a,b)=>{return a-b})
    console.log(nums)
    let joker = 0
    for(let i = 0;i < nums.length;i++){
        // 统计大小王的个数，joker走到非0的最小值
        if(nums[i] == 0) joker++
        // 出现重复数字则返回false
        else if(nums[i] == nums[i+1]) return false
    }
    // 排序后数组最大值 - 数组除0外的最小值， 差小于5即可构成顺子
    return nums[4] - nums[joker] < 5 
};
