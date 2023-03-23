/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-03 13:25:55
 * @LastEditTime: 2022-04-03 14:03:22
 */
// 法一：还是经典的字典判断，存储对应数字出现的次数，遍历字典中出现次数为1的key
var singleNumbers = function(nums) {
    let dict = {}
    for(let num of nums){
        if(num in dict) dict[num] += 1
        else dict[num] = 1
    }
    let res = []
    for(let key in dict){
        if(dict[key] == 1)
            res.push(key)
    }
    return res
};
// 法二：这题的位运算还可以试试，最起码我看懂了
var singleNumbers = function(nums) {
    // 遍历nums执行异或：获取两个不同数字的异或结果
    let x = 0, a = 0, b = 0
    for(let num of nums){
        x = x ^ num
    }
    // 循环左移计算flag：寻找异或结果首尾为1的位
    let flag = 1
    while((flag & x) == 0){
        flag  = flag << 1
    }
    // 拆分nums为两个子数组，利用flag去做&，将两个不同的数分在两个子数组里
    // 对两个子数组分别执行异或即可得到两个数
    for(let num of nums){
        if ((flag & num) == flag){
            a = a ^ num
        }
        else{
            b = b ^ num
        }
    }
    return [a, b]
};