// nums是有重复数字的序列

// 递归+回溯
// 比全排列的题目每层递归中新增加一个set去重判断
var permuteUnique = function(nums) {
    let res = []
    function dfs(nums, path){
        if(nums.length == 0 ){
            res.push(path)
            return
        }
        // 利用Set记录该层已经遍历过的数字
        let seen = new Set()
        for(let i = 0;i < nums.length;i++){
            // 当前数字在set中已经存在则继续循环
            if(seen.has(nums[i]))
                continue
            // 没出现过则记录下来
            seen.add(nums[i])
            dfs(nums.slice(0,i).concat(nums.slice(i+1)), path.concat([nums[i]]))
        }
    }
    dfs(nums, [])
    return res
};