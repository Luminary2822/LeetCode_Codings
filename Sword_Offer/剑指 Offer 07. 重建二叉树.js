/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-16 21:24:56
 * @LastEditTime: 2022-04-16 21:24:57
 */

// 根据前序序列和中序序列重建二叉树
var buildTree = function(preorder, inorder) {
    // 记得要判断
    if(!preorder.length || !inorder.length){
        return null
    }
    // 从前序遍历获取根节点
    let node = preorder.shift()
    // 从中序遍历获取根节点的下标
    let index = inorder.indexOf(node)
    // 新建一棵树
    let root = new TreeNode(node)
    // 递归：根据下标划分左右子树的前序和中序遍历，注意下标
    root.left = buildTree(preorder.slice(0,index), inorder.slice(0,index))
    root.right = buildTree(preorder.slice(index), inorder.slice(index + 1))
    return root
};