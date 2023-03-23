/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-14 13:54:50
 * @LastEditTime: 2022-06-16 17:13:54
 */
/*
2022.06.11滴滴笔试第一题：序列染色
给定一个数组,可以将任意一个数字标记为红色或者蓝色,使得所有红色数字递增,蓝色数字递减;
判断是否可以将所有数字都染色。
输入：7 4 1 3 2 5 6
输出：Yes
解释：7 4 3 标记为蓝色 为降序
     1 2 5 6 标记为红色 为升序

*/



var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
const read_line = __readline.prompt;
const {log}=console;
const print=log;


function isIllegal(nums){
    // 让第一个数字为降序或者升序的一部分，进行dfs搜索
    return dfs(nums[0], Number.MAX_VALUE, nums.slice(1)) || dfs(Number.MIN_VALUE, nums[0], nums.slice(1))
    // 传入上一个染红的数字，上一个染蓝色的数字和剩余数组
    function dfs(red, blue, remain_nums){
        // 如果剩余数组不存在，则染色完成返回true
        if(remain_nums.length == 0)
            return true
        // 如果剩余数组的首位数字大于上一个红色数字，则它可以作为升序的一部分，作为新的red继续向后寻找
        if(remain_nums[0] > red){
            if(dfs(remain_nums[0], blue, remain_nums.slice(1)))
                return true
        }
        // 如果剩余数组的首位数字小于上一个蓝色数字，则它可以作为降序的一部分，作为新的blue继续向后寻找
        if(remain_nums[0] < blue){
            if(dfs(red, remain_nums[0], remain_nums.slice(1)))
                return true
        }
        return false
    }
}
var nums = read_line().split(" ").map(Number)
if(isIllegal(nums))
    console.log('Yes')
else
    console.log('No')
