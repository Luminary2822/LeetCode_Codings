/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-20 20:36:31
 * @LastEditTime: 2022-09-20 20:37:10
 */
/**
 *
建立map表用于存储每个连续子数组sum求和出现的次数，初始化为（0,1），表示和为0的连续子数组出现1次。
sum的值是在对nums数组的循环中不断累加当前元素的，res的值则需要查找map中是否已存在sum-k的元素，也就是在查找此前所有从0项开始累加的连续子项和中有没有sum-k。
如果有的话，则说明从该项到当前项的连续子数组和必定为k，那么res则可以和这个sum的对应值，即这个sum出现的次数，相加得到新的res。
对于当前sum如果已存在与map中则其对应值+1，不存在则添加新项，初始值为1。
 */

//  有点像两数之和
var subarraySum = function(nums, k) {
    // 哈希表，键为前缀和，值为前缀和出现的次数
    let map = new Map()
    // 可能当前的前缀和恰好等于k，此时两者相减为0，这也算是满足题目条件的一种情况
    map.set(0,1)
    let sum = 0
    let res = 0
    for(let i = 0;i < nums.length;i++){
        sum += nums[i]
        // 寻找map中是否已经存在sum-k，有的话将对应次数累加到res里面
        if(map.has(sum - k))
            res += map.get(sum - k)
        // 对于当前sum如果已存在与map中则其对应值+1，不存在则添加新项，初始值为1。
        map.set(sum, map.has(sum) ? map.get(sum) + 1: 1)   
    }
    return res

};