/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-17 18:59:52
 * @LastEditTime: 2022-07-17 19:00:41
 */
// 快慢指针，快指针多跑n，再一起移动
var removeNthFromEnd = function(head, n) {
    // 虚拟头结点
    let dummy = new ListNode()
    dummy.next = head
    // 设置快慢指针，快指针比慢指针多跑n个位置
    // 这样快指针跑到头的时候，慢指针指向倒数第n个结点的前驱
    let fast = dummy, slow = dummy
    while(n--){
        fast = fast.next
    }
    // 一起移动
    // 当fast指向最后一个结点的时候，slow指向倒数第n个结点的前驱结点
    while(fast.next != null){
        fast = fast.next
        slow = slow.next
    }
    // 删除slow结点的下一个结点，就是目标倒数第n个结点。
    slow.next = slow.next.next
    return dummy.next

};