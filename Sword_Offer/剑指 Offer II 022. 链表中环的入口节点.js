var detectCycle = function(head) {
    let slow = head, fast = head
    while(true){
        if(fast == null || fast.next == null)
            return null
        slow = slow.next
        fast = fast.next.next
        if(slow == fast) break
    }
    // 快慢指针相遇，寻找环的起点
    fast = head
    while(fast != slow){
        fast = fast.next
        slow = slow.next
    }
    return slow
};