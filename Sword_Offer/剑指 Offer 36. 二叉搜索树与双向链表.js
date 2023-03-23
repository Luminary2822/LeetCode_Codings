/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-22 22:53:51
 * @LastEditTime: 2022-06-22 22:54:06
 */
// 中序遍历排序 + 设置前置指针head连接链表
var treeToDoublyList = function(root) {
    if(root == null) return null
    // 设置虚拟头结点，利用res记录虚拟头结点
    let head = new Node()
    let res = head
    // 遍历递归
    dfs(root)
    // head此时指向最后一个节点，res指向虚拟头结点，res.right指向真实链表的头结点
    head.right = res.right
    // 断掉头节点的left指针断掉(原本left连在res上)，指向最后一个结点
    res.right.left = head
    return res.right

    // 二叉搜索树中序遍历是递增序列，设置一个虚拟结点将遍历到的结点连接起来
    function dfs(root){
        if(root == null) return
        dfs(root.left)
        // head记录上一个节点，head后置指针指向当前的节点
        head.right = root
        // 设置当前节点的前置指针指向head
        root.left = head
        // head指向下一个节点，不影响遍历也不影响head的right指针
        head = head.right
        dfs(root.right)
    }
};