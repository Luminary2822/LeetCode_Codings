/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-19 21:52:23
 * @LastEditTime: 2022-04-19 21:52:25
 */
 // 用栈存储左括号，遇到右括号进行匹配
 var isValid = function(s) {
    // 建立括号映射字典
    dict = {'(':')','{':'}','[':']'}
    // 设置一个栈
    let stack = []

    for(let c of s){
        // 遍历字符串中的字符，如果在dict的key里面，属于左括号，进栈
        if(c in dict)
            stack.push(c)
        // 不是左括号一定是右括号
        // 栈为空，没有左括号匹配，直接返回false
        // 栈非空：弹出栈顶元素的左括号去字典寻找，不匹配返回false，匹配就已经弹出
        else if(!stack.length || dict[stack.pop()]!=c)
            return false
    }

    // 最后看栈是否为空，空则表示有效，非空则表示无效
    return stack.length == 0

};