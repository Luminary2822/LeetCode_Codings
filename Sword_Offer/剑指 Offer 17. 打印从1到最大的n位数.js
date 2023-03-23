/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-06 20:21:29
 * @LastEditTime: 2022-04-06 20:40:24
 */
// 考虑大数打印越界问题，用字符串模拟加法：深度优先搜索+回溯
var printNumbers = function (n) {
    let res = []
    const dfs = (str, len)=>{
        // 当前拼接的字符串位数达到长度要求，可以退出并加入结果集中
        if(str.length == len) return res.push(str)
        for(let i = 0; i <= 9; i++){
            str += i
            // 调用dfs，例如当前str为10而len是3就可以调用dfs来达到把100 101 102...109加入到结果集中
            dfs(str, len)
            // 这里有点像回溯。在递归退出之后撤消之前选择的数，例如10去掉0，后面循环可以加11
            // substring左闭右开
            str = str.substring(0, str.length - 1)
        }
    }
    // i表示位数，j表示字符串首位1-9
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= 9; j++){
            dfs(j.toString(), i)
        }
    }
    return res
};

console.log(printNumbers(3))