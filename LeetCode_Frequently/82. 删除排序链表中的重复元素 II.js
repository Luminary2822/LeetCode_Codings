/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-26 22:21:04
 * @LastEditTime: 2022-07-26 22:21:12
 */
//  一次遍历，重复的元素在链表中出现的位置是连续的
var deleteDuplicates = function(head) {
    // 设置哑结点，指向head，便于处理当从头结点就开始出现重复元素的情况
    let dummpy = new ListNode(0, head)
    let cur = dummpy
    // 从第一个结点开始遍历，当连续两个结点存在时判断是否值相同
    while(cur.next && cur.next.next) {
        if(cur.next.val == cur.next.next.val){
            // 记录下重复的值
            let temp = cur.next.val
            // 从出现重复值的位置开始遍历，后续等于temp需要删除
            while(cur.next && cur.next.val == temp){
                cur.next = cur.next.next
            } 
        }
        else{
            cur = cur.next
        }
    }
    return dummpy.next
};