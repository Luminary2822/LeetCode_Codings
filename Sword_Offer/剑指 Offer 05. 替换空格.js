/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-20 19:46:46
 * @LastEditTime: 2022-04-20 20:02:44
 */

 // 法一：调用库函数
var replaceSpace = function(s) {
    // 先按照空格切分成单词数组，再按照%20连接起来
    let res = s.split(' ').join('%20')
    return res
};

 // 法二：构造新的字符串，拼接法
 var replaceSpace = function(s) {
    let res = ""
    for(let c of s){
        if(c == " ")
            res += '%20'
        else
            res += c
    }
    return res
};

// 法三：先将字符串扩容成替换后的长度，利用双指针在s上从后向前替换空格
// 双指针法。空间复杂度O(1)
var replaceSpace = function(s) {
    // 1. 转成字符数组, 统计空格数量，计算字符串
    let blank = 0
    // s: ['W', 'e', ' ', 'a','r', 'e', ' ', 'h','a', 'p', 'p', 'y','.']
    s = s.split("")
    for(let char of s){
        if(char === " ")
            blank += 1
    }

    // 2. 得到替换后字符串长度，双指针遍历
    let newStrLen = s.length + 2 * blank
    // i j都从尾部开始往前 i指向原字符串的尾部 j指向新字符串的尾部
    for(let i = s.length - 1, j = newStrLen - 1;i < j;i--,j--){
        // 遍历到非空格字符，就复制过去
        if(s[i] != " ") s[j] = s[i]
        // 遍历到空格字符，就填入%20
        else{
            s[j--] = '0'
            s[j--] = '2'
            s[j] = '%'
        }
    }
    return s.join('')
};