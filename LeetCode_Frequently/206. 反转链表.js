/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-21 20:57:20
 * @LastEditTime: 2022-07-21 21:12:27
 */
// 迭代法
// 时间复杂度O(n)，空间复杂度O(1)
var reverseList = function(head) {
    // prev表示前驱结点，curv表示当前结点
    let prev = null
    let curv = head
    while(curv) {
        // 存储当前结点的后驱结点（关键，因为curv要向后移动）
        let next = curv.next
        // 当前结点的指针指向前面的结点
        curv.next = prev
        // 前驱结点后移
        prev = curv
        // 当前结点后移
        curv = next
    }
    return prev
};

// 递归法
var reverseList = function(head) {
    // 一直递归到链表的最后一个结点，该结点就是反转后的头结点
    if(head == null || head.next == null)
        return head
    let node = reverseList(head.next)
    // 每次函数在返回的过程中，让当前结点的下一个结点的 next指针指向当前节点
    head.next.next = head
    // 同时让当前结点的 next 指针指向 null
    head.next = null
    return node
};
