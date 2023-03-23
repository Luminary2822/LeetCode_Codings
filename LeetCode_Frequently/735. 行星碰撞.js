/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-23 20:05:45
 * @LastEditTime: 2022-09-23 20:07:11
 */
var asteroidCollision = function(asteroids) {
    let stack = []
    for(let item of asteroids){
        // 当栈不存在或者遇到向右走的行星时，直接加入栈中
        if(stack.length === 0 || item > 0){
            stack.push(item)
        }else {
            // 判断是否需要添加当前行星到栈顶
            let remain = true
            while(stack.length !== 0){
                let temp = stack[stack.length - 1]
                // 栈最后一位向左的，直接结束循环
                if(temp < 0) break
                // 栈最后一位和该行星一样大，两个一起爆炸，出栈结束循环
                else if(temp == Math.abs(item)){
                    stack.pop()
                    remain = false
                    break
                }
                // 栈最后一位比该行星一样大，小的爆炸大的保留，不需要操作，当前行星不需要保留。
                else if(temp > Math.abs(item)){
                    remain = false
                    break
                // 栈最后一位比该行星一样小，出栈，继续循环
                }else
                    stack.pop()
            }
            if(remain == true)
                stack.push(item)
        }
    }
    return stack
};