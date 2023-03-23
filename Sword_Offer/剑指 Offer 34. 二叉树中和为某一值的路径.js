/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-05-06 13:21:22
 * @LastEditTime: 2022-05-06 13:22:55
 */
// 前序遍历 + 递归回溯
// 采用深度优先搜索的方式，枚举每一条从根节点到叶子节点的路径。
// 当遍历到叶子节点，且此时路径和恰为目标和时，就找到了一条满足条件的路径。
var pathSum = function(root, target) {
    // 声明路径数组和结果数组
    let path = [], res = []
    dfs(root,target)
    return res

    // 先序遍历 + 回溯
    function dfs(root, target){
        // 如果当前结点为空，直接返回
        if(!root) return
        // 当前结点值加入路径
        path.push(root.val)
        // 判断到当前结点路径之和是否等于target
        target -= root.val
        // 如果路径和 === target，将路径push进res，注意要新建一个path数组（深拷贝）
        if(!root.left && !root.right && target === 0){
            res.push([...path])
        }
        // 先序遍历左子树，再遍历右子树
        dfs(root.left, target)
        dfs(root.right, target)
        // 回溯的时候要将路径最后一位弹出
        path.pop()    
    }
};