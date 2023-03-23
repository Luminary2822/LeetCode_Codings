/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-29 22:57:41
 * @LastEditTime: 2022-05-02 15:45:57
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null

    // 如果当前根值大于两个值，说明p和q都在左子树
    if(root.val > p.val && root.val > q.val)
        return lowestCommonAncestor(root.left, p, q) 

    // 如果当前根值小于两个值，说明p和q都在右子树
    if(root.val < p.val && root.val < q.val)
        return lowestCommonAncestor(root.right, p, q)

    // p，q在root的两边，说明当前的root就是最近共同祖先
    return root
};