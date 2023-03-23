/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-31 23:17:41
 * @LastEditTime: 2022-07-31 23:17:49
 */
// 快慢指针：相遇判有环，置头再相遇得起点
var detectCycle = function(head) {
    let slow = head
    let fast = head
    while(true){
        if(fast == null || fast.next == null){
            return null
        }
        slow = slow.next
        fast = fast.next.next
        // 快慢指针相遇证明有环，跳出循环找起点
        if(slow == fast)
            break
    }
    // 将fast指向head，重新和slow一步一步向前走直到相遇即为起点
    fast = head
    while(fast != slow){
        fast = fast.next
        slow = slow.next
    }
    return slow


    
};