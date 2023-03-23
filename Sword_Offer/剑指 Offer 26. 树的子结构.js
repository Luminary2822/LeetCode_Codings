/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-27 20:12:00
 * @LastEditTime: 2022-04-27 20:12:01
 */
 // 匹配根节点：主函数在A中寻找与B的根节点相同的结点C
 var isSubStructure = function(A, B) {
    // 如果A或者B有一个为空了，说明没找到返回false
    if(!A || !B)
        return false
    // 递归遍历左子树和右子树去寻找与B根节点相同的结点
    return isSame(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B)

    // 匹配其他结点：验证C的子树和B的子树是否相同
    function isSame(A, B){
        // 如果B到达null，说明B匹配完成(A不一定要为空，因为是子结构)
        if(!B)
            return true
        // 如果A到达null，B不为空必然不是子树
        if(!A)
            return false
        return A.val === B.val && isSame(A.left,B.left) && isSame(A.right,B.right)
    }    
};