/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-05-02 22:02:10
 * @LastEditTime: 2022-05-02 22:02:27
 */
// 一般的二叉树，要判断到节点为p或者q为止
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    // 如果根节点就是p或者q，返回根节点
    if(root == p || root == q)
        return root
    // 分别去左右子树里面找
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    // p，q各在一边，说明当前的根就是最近共同祖先 
    if(left && right)
        return root
    // 说明p，q都在左子树
    else if(left)
        return left
    // 说明p，q都在右子树
    else if(right)
        return right
    else return null    
};