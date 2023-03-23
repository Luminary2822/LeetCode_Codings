/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-26 22:12:11
 * @LastEditTime: 2022-07-26 22:15:58
 */
// 一次遍历，重复元素是相邻的
var deleteDuplicates = function(head) {
    let cur = head
    // 当前结点和下一结点存在时
    while(cur && cur.next){
        // 判断是否重复，重复的话删除cur.next
        if(cur.val == cur.next.val){
            cur.next = cur.next.next
        }
        else{
            cur = cur.next
        }
    }
    return head

};