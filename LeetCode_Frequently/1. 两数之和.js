/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-26 21:56:51
 * @LastEditTime: 2022-06-26 22:09:34
 */

// 普通哈希表法
var twoSum = function(nums, target) {
    let dict = {}
    for(let i = 0;i < nums.length;i++){
        if((target - nums[i]) in dict){
            return [dict[target - nums[i]], i]
        }
        dict[nums[i]] = i
    }
    return []
};
//  map哈希表法
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0;i < nums.length;i++){
        if(map.has(target - nums[i]))
            return [map.get(target - nums[i]), i]
        map.set(nums[i],i)
    }
    return []
};