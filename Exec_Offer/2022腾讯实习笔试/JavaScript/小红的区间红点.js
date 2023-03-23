/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-24 20:56:23
 * @LastEditTime: 2022-04-24 21:54:54
 */
// 这题练习写了一下输入输出
/*
输入：
4 3                                                     
1 15 3 10
6 2 4
4
1 2
1 3
2 6
1 20
输出：
2 1 1
*/

// 输入输出模块
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
const read_line = __readline.prompt;
const {log}=console;
const print=log;

var input = read_line();
// 获取下面两行每行有多少数据
var lines = input.split(' ').map(Number)
var m = lines[0]
var n = lines[1]

// 读取两行的内容
var red = [], blue = [];
while(red.length !== m){
    // red是长度为m的数字数组
    red = read_line().split(' ').map(Number)
}
while(blue.length !== n){
    // b是长度为n的数字数组
    blue = read_line().split(' ').map(Number)
}
var count = parseInt(read_line());
var lines = []
for(let i = 0; i < count; i++) {
    var line = read_line().split(" ").map(Number);
    lines.push(line)
}

// print(red)
// print(blue)
// print(lines[0])
// print(lines[1])
// print(lines[2])
// print(lines[3])



// lines是读入的区间，其中line是每个区间[1,2]这种，line[0]就是左边界，line[1]就是右边界
// red是红色点的坐标数组[1,15,3,10]
// blue是蓝色点的坐标数组[6,2,4]

let class_a = 0,class_b = 0,class_c = 0
// 升序排序
red.sort(function(a,b){return a - b})
blue.sort(function(a,b){return a - b})
// 遍历所有区间
for(let line of lines){
    let red_count = 0,blue_count = 0
    // 判断红点个数
    for(let num of red){
        // 如果坐标数组的最小值 小于等于 区间的最大值，继续判断
        if(num <= line[1]){
            // 坐标数组的最小值 大于等于 区间的最小值，说明在区间内
            if(num >= line[0])
                red_count += 1
            // 坐标数组的最小值 小于 区间的最小值，一定不在当前区间，跳出当前循环
            else
                break
        }
        // 如果坐标数组的最小值 大于 区间的最大值，一定不在当前区间，跳出当前循环
        else
            break
    }
    // 判断蓝点个数
    for(let num of blue){
        if(num <= line[1]){
            if(num >= line[0])
                blue_count += 1
            else
                break
        }
        else
            break
    }

    if(red_count > blue_count)
        class_a += 1
    else if(red_count == blue_count)
        class_b += 1
    else
        class_c += 1
}
print(class_a + ' ' + class_b + ' ' + class_c)