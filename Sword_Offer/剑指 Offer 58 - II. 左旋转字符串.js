/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-18 21:34:49
 * @LastEditTime: 2022-04-18 21:37:39
 */
// 字符串切片
var reverseLeftWords = function(s, n) {
    return s.substring(n, s.length) + s.substring(0, n)
};

// 辅助空间
var reverseLeftWords = function(s, n) {
    let res = ""
    for(let i = n;i < s.length;i++)
        res += s[i]
    for(let i = 0;i < n;i ++)
        res += s[i]
    return res
};

// 求余取模运算
var reverseLeftWords = function(s, n) {
    let res = ""
    for(let i = n;i < s.length + n;i++)
        res += s[i % s.length]
    return res
};