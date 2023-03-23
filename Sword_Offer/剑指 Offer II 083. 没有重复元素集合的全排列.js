 // 回溯法
//  第一种：选取已经选择的数和其他数字排列的组合
 var permute = function(nums) {
    let res = []
    function backtrace(nums, path){
        // 当传入数组中可用的数已经用完时，将当前路径加入结果数组
        if(nums.length == 0){
            res.push(path)
            return
        }
        // 遍历传入的nums数组
        for(let i = 0;i < nums.length;i++){
            // 除去nums[i]以外剩余元素组成的数组，path加入当前遍历的数，递归继续进行排列
            backtrace(nums.slice(0,i).concat(nums.slice(i+1)), path.concat([nums[i]]))
        }       
    }
    // 递归起点
    backtrace(nums,[])
    return res
};
// 第二种：使用标记数组，会额外增加空间复杂度
var permute = function(nums) {
    // 声明结果数组、路径数组和标记数组
    let res = [], path = []
    let used = new Array(nums.length).fill(false)
    // 深度优先搜索
    function dfs(){
        // 如果当前路径长度等于nums的长度，则为一种排列方式加入结果数组
        if(path.length == nums.length){
            res.push([...path])
            return
        }
        for(let i = 0;i < nums.length;i++){
            // 利用标记数组标记该数是否已经使用过，使用过则继续遍历
            if(used[i])
                continue
            // 没有使用过则加入路径数组
            path.push(nums[i])
            // 将该位置标记为已使用
            used[i] = true
            // 继续递归
            dfs()
            // 回溯时pop出刚刚加入的数
            path.pop()
            // 将其标记数组记为false
            used[i] = false
        }
    }
    // 递归入口
    dfs()
    return res
};

