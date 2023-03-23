/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-23 15:09:23
 * @LastEditTime: 2022-04-23 15:11:03
 */
// 滑动窗口
var lengthOfLongestSubstring = function(s) {
    let left = 0,right = 0
    let res = 0
    N = s.length

    // set维护一个不含重复元素的窗口
    let temp = new Set()
    
    while(right < N){
        // 循环判断：出现重复元素，窗口右移，删除左边元素，左指针向前，直到移除重复元素
        while(temp.has(s[right])){
            temp.delete(s[left])
            left += 1
        }
        // 当前字符加入窗口中
        temp.add(s[right])
        // 实时记录窗口内子串的最长长度
        res = Math.max(res, right - left + 1)
        // 右指针向前
        right += 1
    }
    return res
};