/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-03 21:14:40
 * @LastEditTime: 2022-07-04 20:49:23
 */
/*
2022.07.01蔚来提前批笔试
题意：在不超过给定甜度时最多吃多少糖果。
思路：基础贪心，他们说将糖果按甜度排序sort一下，尽可能多的吃糖果就从甜度最小的开始吃，一直吃到给定甜度就不吃了。
     从小到大不断取，啥时候取够k就停下来
示例（自己编的）
输入
3 6 4 2 6 数字代表甜度，位置代表种类，
10 给定甜度
输出
3
*/
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
const read_line = __readline.prompt;

var candys = read_line().split(" ").map(Number)
var k = parseInt(read_line())

candys.sort((a,b)=>{return a-b})
console.log(k)
let sum = 0, i = 0
while(i < candys.length){
    if(sum > k)
        break
    else
        sum += candys[i++]
}
// 为什么是i-1，因为sum大于k的时候，多的i已经加进去了，i又在多余的i基础上又加了1，所以i-2应该是正常的下标，糖果种类应该是下标加1，所以是i-1
console.log(i-1)
