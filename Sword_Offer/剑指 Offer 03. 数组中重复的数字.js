/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-03-31 11:58:40
 * @LastEditTime: 2022-04-02 13:22:56
 */

// 法一：哈希表。时间复杂度O(n)，空间复杂度O(n)
var findRepeatNumber = function(nums) {
    var dict = {};
    for(let num of nums) {
        if(dict[num]) return num;
        dict[num] = 1;
    }
};
// 法二：原地排序。时间复杂度O(n)，空间复杂度O(1)
var findRepeatNumber = function(nums) {
    for(let i = 0;i < nums.length;i++){
        while(nums[i] != i){        // 你不是这家的萝卜
            temp = nums[i]          // 看看你是谁家的萝卜
            if(nums[temp] == temp)  // 看看你家里有没有和你一样的萝卜
                return nums[i]      // 你多余了，你是重复的数字上交！
            else
                // 把你送回家，再把你家的萝卜取出来
                [nums[temp], nums[i]] = [nums[i], nums[temp]]   
        }
    }
};

// Test
res = findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
console.log(res)
