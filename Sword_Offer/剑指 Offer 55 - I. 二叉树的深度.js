/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-29 17:11:25
 * @LastEditTime: 2022-04-29 17:34:35
 */
// 递归
var maxDepth = function(root) {
    if(!root) return null
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

 // 迭代，层序遍历
 var maxDepth = function(root) {
    if(!root) return 0
    let depth = 0
    let quene = [root]
    while(quene.length){
        let size = quene.length
        while(size !== 0){
            let node = quene.shift()
            if(node.left) quene.push(node.left)
            if(node.right) quene.push(node.right)
            size -= 1
        }
        depth += 1
    }
    return depth
};