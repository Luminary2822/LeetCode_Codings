/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-03 12:50:22
 * @LastEditTime: 2022-04-03 20:14:59
 */
// 法一：字典，存储数字出现的次数，最后寻找出现一次的数字返回
var singleNumber = function(nums) {
    var dict = {}
    for(let num of nums){
        if(num in dict) dict[num] += 1
        else dict[num] = 1
    }
    for(let key in dict){
        if(dict[key] == 1){
            return key
        }
    }
    return -1
};
// 法二：位运算
var singleNumber = function(nums) {
    // 构建存储二进制位每一位的和数组
    let arr = new Array(32).fill(0)
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < arr.length; j++){
            // 每位二进制右移，获取1的数量累加到对应位数组中
            arr[j] += (nums[i] >> (31 - j)) & 1
        }
    }
    let res = 0
    for(let i = 0; i < arr.length; i++){
        // 高位迭代左移，还原组合成它真实的值
        res = (res << 1) + (arr[i] % 3)
    }
    return res
};