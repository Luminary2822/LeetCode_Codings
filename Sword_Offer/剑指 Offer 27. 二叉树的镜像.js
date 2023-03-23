/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-25 21:31:33
 * @LastEditTime: 2022-04-25 21:42:22
 */
 // 递归每个节点交换左右子树
 var mirrorTree = function(root) {
    if(!root) return null;
    // 交换当前根节点的左右子结点
    [root.left, root.right] = [root.right, root.left]
    // 递归交换左右子树
    mirrorTree(root.left)
    mirrorTree(root.right)
    return root
};

// 迭代：二叉树的层序遍历，在遍历每一层的时候交换左右结点
var mirrorTree = function(root) {
    if(!root) return null
    let quene = [root]
    while(quene.length){
        // 模拟队列，从头部弹出当前遍历的结点
        let node = quene.shift()
        // 将其左右子结点加入队列中
        if(node.left) quene.push(node.left)
        if(node.right) quene.push(node.right)
        // 交换当前遍历结点的左右结点，这里用ES6的解构赋值[]不行
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    }
    return root
};