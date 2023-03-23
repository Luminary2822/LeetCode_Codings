/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-05 22:33:08
 * @LastEditTime: 2022-07-05 22:33:14
 */
// 回溯法
var subsets = function(nums) {
    let res = []
    dfs(nums, 0, res, [])
    return res
    // path为每次回溯中产生的子集，加入结果数组中，继续向后寻找，concat方法不需要pop
    function dfs(nums, index, res, path) {
        res.push(path)
        for(let i = index;i < nums.length;i++){
            dfs(nums, i + 1, res, path.concat([nums[i]]))
        }
    }
};