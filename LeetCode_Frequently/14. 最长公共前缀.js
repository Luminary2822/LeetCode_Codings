/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-05-28 15:33:56
 * @LastEditTime: 2022-05-28 15:34:02
 */
var longestCommonPrefix = function(strs) {
    // 将字符串数组按照长度从小到大排序
    strs.sort((a,b)=>{return a.length - b.length})
    // 将长度最小的字符串作为目前的最大公共前缀
    let min_str = strs[0]

    // 遍历后面的字符串，与min_str比较获取它们的最大公共前缀赋给min_str
    for(let i = 1;i < strs.length;i++){
        for(let j = 0;j < min_str.length;j++){
            // 当前列字符不相等，在min_str上截取新的最大公共前缀
            if(strs[i][j] != min_str[j]){
                // 如果是第一列，说明它们一定是没有公共前缀
                if(j == 0)  return ''
                min_str = min_str.substring(0,j)
                
            }
        }
    }
    return min_str
};