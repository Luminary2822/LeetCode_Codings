/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-27 20:58:00
 * @LastEditTime: 2022-04-27 21:00:28
 */
// 利用队列实现层序遍历BFS
var levelOrder = function(root) {
    // 注意一下这里返回的是[]，不是null
    if(!root) return []
    let quene = [root]
    let res = []
    while(quene.length){
        // 弹出当前遍历的结点
        let node = quene.shift()
        // 将其val加入遍历结果数组中
        res.push(node.val)
        // 下一层的左右子结点存在则加入队列，后续继续遍历
        if(node.left)
            quene.push(node.left)
        if(node.right)
            quene.push(node.right)
    }
    return res
};