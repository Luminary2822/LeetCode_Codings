/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-03 21:14:07
 * @LastEditTime: 2022-07-04 20:34:13
 */
/*
2022.07.01蔚来提前批笔试
题意：给出一个数组，都是正整数，无序的。求连续子数组的最大平均值。
思路：看了牛客网一圈的分析，因为单个数字也可以是连续子数组，所以这道题就变成了其实求数组的最大值
     LeetCode有求平均值一道比较合理的题，643. 子数组最大平均数 I
     https://leetcode.cn/problems/maximum-average-subarray-i/
示例（自己编的）
输入
1 12 2 5 50 3    数组
输出
50
*/
// 练习一下输入输出
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
const read_line = __readline.prompt;

var input = read_line().split(' ').map(Number)
console.log(Math.max(...input))