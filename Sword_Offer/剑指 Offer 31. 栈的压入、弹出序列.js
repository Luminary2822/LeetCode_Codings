/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-17 17:10:13
 * @LastEditTime: 2022-04-17 17:10:13
 */
// 模拟操作
var validateStackSequences = function(pushed, popped) {
    let stack = []
    let i = 0
    for(let num of pushed){
        // 根据压栈序列入栈
        stack.push(num)
        // 循环判断：栈顶元素 === 弹出序列的当前元素
        while(stack.length && stack[stack.length - 1] === popped[i]){
            stack.pop()
            i += 1
        }
    }
    // 如果stack为空，则弹出序列合法
    return !stack.length
};