/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-27 21:35:25
 * @LastEditTime: 2022-04-27 22:23:53
 */
var levelOrder = function(root) {
    if(!root) return []
    let res = []
    let quene = [root]
    // 增加层级记录，当前根结点是第一层
    let level = 1
    while(quene.length){
        let temp = []
        // 存储这一层的结点数
        size = quene.length
        for(let i = 0;i < size;i++){
            let node = quene.shift()
            // 奇数层从左到右记录，偶数层从右到左记录
            if(level % 2 === 0)
                temp.unshift(node.val)
            else
                temp.push(node.val)
            if(node.left) quene.push(node.left)
            if(node.right) quene.push(node.right)
        }
        res.push(temp)
        // 层级加一
        level += 1
    }
    return res
};

