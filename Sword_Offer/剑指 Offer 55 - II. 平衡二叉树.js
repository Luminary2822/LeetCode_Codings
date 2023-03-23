/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-29 21:44:44
 * @LastEditTime: 2022-04-29 22:17:03
 */
 // 自顶向下的递归：先序遍历
 // 时间复杂度：O(n^2)，空间复杂度：O(n)
 var isBalanced = function(root) {
    // 计算任意二叉树任意结点的高度
    function getDepth(node){
        if(!node) return 0
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1
    }
    if(!root) return true
    // 对于当前遍历到的节点，首先计算左右子树的高度，满足平衡二叉树的条件，再递归判断左右子树是否满足平衡条件
     if(Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1)
        return isBalanced(root.left) && isBalanced(root.right)
    return false

};

 // 自底向上的递归：后序遍历
 // 时间复杂度：O(n)，空间复杂度：O(n)
 var isBalanced = function(root) {
    let flag = true
    dfs(root) 
    return flag

    // 计算二叉树的高度
    function dfs(root){
        if(!root) return 0

        // 一直向左边找到最左边结点，计算其左右子树的高度差
        let leftHeight = dfs(root.left)
        let rightHeight = dfs(root.right)

        // 判断左右子树高度是否满足平衡二叉树，不满足设置为false
        if(Math.abs(leftHeight - rightHeight) > 1){
            flag = false
            return
        }
        // 满足返回最大高度，继续向上判断每个结点是否满足平衡
        return Math.max(leftHeight, rightHeight) + 1
    }
};