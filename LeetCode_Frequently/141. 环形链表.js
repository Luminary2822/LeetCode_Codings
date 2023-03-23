/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-31 23:17:29
 * @LastEditTime: 2022-07-31 23:17:35
 */
// 快慢指针
var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        // 快慢指针相遇表示有环
        if(slow == fast){
            return true
        }
    }
    return false
};