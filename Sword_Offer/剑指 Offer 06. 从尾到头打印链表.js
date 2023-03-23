/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-30 22:57:24
 * @LastEditTime: 2022-06-30 22:57:31
 */
// 利用js的数组unshift头插法遍历链表
var reversePrint = function(head) {
    let res = []
    let node = head
    while(node != null) {
        res.unshift(node.val);
        node = node.next
    }
    return res
};