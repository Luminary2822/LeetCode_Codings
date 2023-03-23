/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-18 22:01:03
 * @LastEditTime: 2022-04-21 16:06:26
 */
// 分割 + 倒序
// 时间复杂度: O(N)，空间复杂度: O(N)
var reverseWords = function(s) {
    
    // trim()去除字符串两边的空格
    // split(" ")按照空格划分转成字符数组，多余的空格会转成''
    let strArr = s.trim().split(" ")
    let res = ""

    for(let i = strArr.length - 1;i >= 0;i--){
        // 如果字符数组遍历到空''，则继续遍历
        if(strArr[i] === '')
            continue
        // 不为空时，将当前的单词+空格拼接到结果字符串中
        if(i > 0)
            res += strArr[i] + ' '
        // 最后一位不拼空格
        else
            res += strArr[i]
    }
    return res
};