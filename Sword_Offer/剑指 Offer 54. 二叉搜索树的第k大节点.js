/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-22 22:45:24
 * @LastEditTime: 2022-06-22 22:52:47
 */
// 法一：二叉搜索树中序遍历为递增序列，直接中序遍历存储值然后选倒数第k个
var kthLargest = function(root, k) {
    let res = []
    inOrder(root,res)
    return res[res.length - k]

    function inOrder(root, res){
        if(!root) return null
        inOrder(root.left, res)
        res.push(root.val)
        inOrder(root.right, res)
    }
};
// 法二：优化：中序遍历的倒序：右中左，正序找到第K个提前停止
var kthLargest = function(root, k) {
    let res = []
    inOrder(root,res)
    return res[k - 1]

    function inOrder(root, res){
        if(!root) return null
        if(res.length === k) return
        inOrder(root.right, res)
        res.push(root.val)
        inOrder(root.left, res)
    }
};
