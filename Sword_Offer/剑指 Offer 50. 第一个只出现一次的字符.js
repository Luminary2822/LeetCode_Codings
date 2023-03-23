/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-20 19:23:41
 * @LastEditTime: 2022-04-20 19:31:02
 */
// 字典存储字母出现的次数
var firstUniqChar = function(s) {
    let dict = {}
    for(let c of s){
        if(c in dict)
            dict[c] += 1
        else
            dict[c] = 1
    }
    for(let key in dict){
        if(dict[key] == 1)
            return key
    }
    return ' '
};
// map存储，value存储出现次数为1的值为true，其他为false
var firstUniqChar = function(s) {
    let map = new Map()
    for(let c of s){
        // 如果哈希表中有该字符，则将它的值存储为false，没有存储true
        map.set(c, !map.has(c))
    }
    for(let [key,val] of map){
        // 返回值为true的键即为只出现一次的字符
        if(val) return key
    }
    return ' '
};