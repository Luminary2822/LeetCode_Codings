/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-15 21:16:02
 * @LastEditTime: 2022-04-15 22:05:26
 */
/*
2022.04.15网易笔试第一题：由二叉树中序和后序遍历求任意两个节点路径长度的最大值
题意：给定两个整数序列inorder和postorder，其中inorder是二叉树的中序遍历序列，postorder是同一颗二叉树的后续遍历序列
元素互不重复，请你计算这颗二叉树任意两个结点路径长度中的最大值。
思路：先根据中序和后序序列构造一颗二叉树，然后计算二叉树的直径（任意两个结点路径长度中的最大值）
     两道LeetCode拼接：
     106.从中序与后序遍历序列构造二叉树：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
     543.二叉树的直径：https://leetcode-cn.com/problems/diameter-of-binary-tree/
示例：
输入
7    二叉树元素个数
[4,2,1,5,7,3,6]      二叉树中序遍历序列
[4,2,7,5,6,3,1]      二叉树后序遍历序列
输出
5
 */

// 106.从中序与后序遍历序列构造二叉树
var buildTree = function(inorder, postorder) {
     if(!inorder.length || !postorder.length){
        return null
    }
     // 根据后序遍历获得根节点，并pop出去
     let node = postorder.pop()
     // 获取根节点在中序遍历数组中的位置
     let index = inorder.indexOf(node) 
     // 构造一棵树
     let root = new TreeNode(node) 
     // index将中序遍历分为左右子树，刨除index（因为index为根节点序号）
     // 后序遍历前index即为左子树的后序遍历，后面即为右子树的后序遍历，slice(index)包括index
     root.left = buildTree(inorder.slice(0,index),postorder.slice(0,index))
     root.right = buildTree(inorder.slice(index+1),postorder.slice(index))
 
     return root
};

// 543.二叉树的直径
var diameterOfBinaryTree = function(root) {
     // 可以将二叉树的直径转换为：每个节点的最大直径等于左右子树最大深度之和。
     // 通过全局变量result来维护最大值，即是二叉树的直径
     let result=0;
     deep(root);
     return result;
     // 求深度函数
     function deep(root){
         if(!root)return -1
         // 左子树最大深度
         let left=root.left?deep(root.left)+1:0
         // 右子树最大深度
         let right=root.right?deep(root.right)+1:0
         // 求解深度之和的最大值
         result=Math.max(left+right,result)
         // 以每一个节点为中心点计算最长路径
         return Math.max(left,right)
     }
 
 };
