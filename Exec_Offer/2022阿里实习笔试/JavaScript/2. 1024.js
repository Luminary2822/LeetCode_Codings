/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-08 13:51:33
 * @LastEditTime: 2022-04-08 15:35:43
 */
/*
2022.04.07阿里笔试第二题：1024
题意：给出n个正整数ai（1<=i<=n)支持两种操作（可选择任意操作）：
    1.删除两个相同的数，添加这两个数之和
    2.删除两个数，添加这两个数中的最大值
已知通过n-1次操作后，只剩下一个数，求这个数的最大值
示例：输入3  2,2,4，输出8
 */
function compare(a, b){
    return a - b
}
var getMaxNum = function(nums){
    var dict = {}
    var res = []
    for(let num of nums){
        new_key = num
        // 当前数不在字典里，加入字典添加出现次数为1
        if(!(new_key in dict)){
            dict[new_key] = 1
            continue
        }
        // 当前数已经在字典里面，说明出现重复数，要合并添加它们的和
        while(dict[new_key] == 1) 
            // 将当前重复数在字典里的次数记录置为0
            dict[new_key] = 0
            // 获取它们的和，循环重复判断它们的和是否存在重复数
            new_key *= 2
        // 直到它们的和new_key不在字典里，所以加入字典直接=1
        dict[new_key] = 1
    }
    console.log(dict)
    res = Object.keys(dict).sort(compare)
    // console.log(res)
    // 此时字典中的key都是字符串类型，需要转成int类型输出
    return parseInt(res.pop())
}
console.log(getMaxNum([2,2,4]))