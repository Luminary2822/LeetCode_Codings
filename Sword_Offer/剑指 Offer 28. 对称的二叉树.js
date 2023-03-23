/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-27 20:28:45
 * @LastEditTime: 2022-04-27 20:42:44
 */
// 法一递归：先获取二叉树的镜像，再判断镜像前和镜像后的两棵树是否完全相同
var isSymmetric = function(root) {
    // 获取二叉树的镜像
    function mirroTree(root){
        if(!root) return null
        let newRoot = new TreeNode(root.val)
        newRoot.left = mirroTree(root.right)
        newRoot.right = mirroTree(root.left)
        return newRoot
    }
    // 判断原树和镜像后的二叉树是否相同
    function isSame(A, B){
        // 同时到达null，匹配成功
        if(!A && !B)
            return true
        // 有一个先到达null，匹配失败
        if(!A || !B)
            return false
        return A.val === B.val && isSame(A.left,B.left) && isSame(A.right,B.right)
    }
    if(!root) return true
    let mirroRoot = mirroTree(root)
    return isSame(root,mirroRoot)
};
// 法二递归：直接用辅助函数判断是否对称相等，其左右子树是否对称相等
var isSymmetric = function(root) {
    // 判断A和B是否为对称二叉树
    function isSymmetrySame(A, B){
        // 同时到达null，匹配成功
        if(!A && !B)
            return true
        // 有一个先到达null，匹配失败
        if(!A || !B)
            return false
        // 本身结点值相等，然后左结点的左子树等于右结点的右子树，左结点的右子树等于右结点的左子树
        return A.val === B.val && isSame(A.left,B.right) && isSame(A.right,B.left)
    }
    if(!root) return true
    return isSymmetrySame(root.left, root.right)
};

// 法三迭代
var isSymmetric = function(root) {
    if(!root) return true
    // 对称的两个成对进
    let quene = [root.left,root.right]
    while(quene.length){
        // 取出对称的两个
        let node_left = quene.shift()
        let node_right = quene.shift()
        // 都为空则对称
        if(!node_left && !node_right)
            continue
        // 有一个为空不对称
        else if(!node_left || !node_right)
            return false
        // 值不相等不对称
        else if(node_left.val != node_right.val)
            return false
        // 加入当前对称结点的左右子结点，成对加入在后面的循环中继续判断
        quene.push(node_left.left)
        quene.push(node_right.right)
        quene.push(node_left.right)
        quene.push(node_right.left)
    }
    return true
};