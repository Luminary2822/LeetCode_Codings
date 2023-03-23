/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-22 16:58:10
 * @LastEditTime: 2022-05-22 15:54:11
 */
// 回溯 + 剪枝
// 固定当前字符加入path，寻找其他字符的排列方案进行组合，遇到重复字符跳过，因为重复字符会导致重复方案
var permutation = function(s) {
    let res = []
    function dfs(str, path){
        if(str.length == 0){
            res.push(path)
        }
        // 记录选择过的字符
        let seen = new Set()
        for(let i = 0;i < str.length;i++){
            // 遇到重复字符，跳过继续循环
            if(seen.has(str[i]))  continue
            // 将字符加入seen数组中，记录下来
            seen.add(str[i])
            dfs(str.slice(0, i) + str.slice(i + 1), path + str[i])
        }
    }
    dfs(s, "")
    return res
    // return Array.from(new Set(res))
};
