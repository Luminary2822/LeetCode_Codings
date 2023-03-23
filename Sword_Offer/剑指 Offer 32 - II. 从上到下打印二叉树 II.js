/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-27 21:15:59
 * @LastEditTime: 2022-04-27 21:28:26
 */
// 层序遍历BFS，每一层遍历的结点
var levelOrder = function(root) {
    if(!root) return []
    let res = []
    let quene = [root]
    while(quene.length){
        let temp = []
        // 存储这一层的结点数
        size = quene.length
        // for循环这里不能写quene.length，因为后面添加元素会影响quene.length
        // 解决方法：i=quqne.length递减遍历，i只是计数变量与顺序无关；或者先存储size，或者用while(size)，后面再--
        for(let i = 0;i < size;i++){
            let node = quene.shift()
            temp.push(node.val)
            if(node.left) quene.push(node.left)
            if(node.right) quene.push(node.right)
        }
        res.push(temp)
    }
    return res

};