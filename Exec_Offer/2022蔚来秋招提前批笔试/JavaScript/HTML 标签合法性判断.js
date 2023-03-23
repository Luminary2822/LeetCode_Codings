/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-03 21:16:14
 * @LastEditTime: 2022-07-04 21:46:23
 */
/*
2022.07.01蔚来提前批笔试
题意： HTML 标签合法性判断
思路：貌似是根据括号匹配去改编的，利用栈去存储左标签，遇到右标签栈内弹出做匹配，最后到标签结尾且
示例（自己编的）
输入
<aa></aa>
<aa><bb><cc></cc></bb></aa>
<aa><bb><cc></aa>
输出
True
True
False
*/
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
const read_line = __readline.prompt;

var str = read_line()
// var str = '<aa></aa>'
let stack = []
let i = 0
for(;i < str.length;i++){
    // 左标签
    if(str[i] == '<' && str[i+1] != '/'){
        let temp_str = ''
        i += 1
        while(str[i] != '>')
            temp_str += str[i++]
        // 标签内元素不能为空
        if(temp_str.length == 0) break
        stack.push(temp_str)
    }
    // 右标签
    else if(str[i] == '<' && str[i+1] == '/'){
        let temp_str = ''
        i += 2
        while(str[i] != '>')
            temp_str += str[i++]
        if(temp_str != stack[stack.length - 1]) break
        stack.pop()
    }
    else
        break   // 标签外不能存在字母
}
// 判断是否到标签结尾以及栈是否为空
if(stack.length === 0 && i === str.length)
    console.log("YES")
else
    console.log("NO")