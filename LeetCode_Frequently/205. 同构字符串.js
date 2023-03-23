/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-03 21:55:47
 * @LastEditTime: 2022-07-04 20:29:18
 */
// 利用字典构造s和t的互相映射，发现对应不上就返回 false
var isIsomorphic = function(s, t) {
    let n = s.length
    let st = {}, ts = {}
    for(let i = 0;i < n;i++){
        // 判断s到t的映射
        if(!st[s[i]]) st[s[i]] = t[i]   // 如果没有s中的字符，就加入作为键，t中对应的字符作为值
        else if(st[s[i]] != t[i]) return false  // 如果有该字符，判断其值是否为t对应的字符
        // 判断t到s的映射
        if(!ts[t[i]]) ts[t[i]] = s[i]
        else if(ts[t[i]] != s[i]) return false
    }
    return true

};