/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-23 22:33:50
 * @LastEditTime: 2022-06-23 22:33:56
 */
// 定义两指针走到终点后再分别指向对方的头结点，两个指针走过相同的距离，相遇则为交点 
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null
    let pa = headA
    let pb = headB
    while(pa != pb){
        // 走到终点后指向另一链表的表头
        pa = pa == null ? headB : pa.next
        pb = pb == null ? headA : pb.next
    }
    return pa
};