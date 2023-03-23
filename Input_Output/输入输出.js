/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-16 16:01:54
 * @LastEditTime: 2022-08-21 21:46:23
 */
/* 前情提要
1. read_line读取得到的是字符串，.split(' ')获取字符数组，.map(Number)可以转换成数字数组
2. 对于单个字符转换数字：parseInt
*/

/*
安装 readline-sync npm install readline-sync
模拟JavaScript V8引擎输入输出：readline(牛客)/read_line（赛码）输出：print
*/
var __readline = require('readline-sync');
__readline.setDefaultOptions({prompt: ''});
const read_line = __readline.prompt;
const {log}=console;
const print=log;

// 大多数情况都是只输入一组，因为样例要一个一个过才能计算样例数，所以基本不会用到while的

// 1. 固定输入规模，只有一组输入。（这一组可能是一行或者多行）
// 1.1 这一组是一行：直接read_line()
var input = read_line().split(" ")

// 1.1 这一组是多行：有几行就写几行read_line读进来
// 示例：输入第一行是数字n，之后跟着n行数据。
var n = parseInt(read_line());
var lines = []
for(let i = 0; i < n; i++) {
    var line = read_line().split(" ").map(Number);
    lines.push(line)
}



// 1. 不固定输入规模，可能要接收多组输入。（每一组可能是一行或者多行）
// 1.1 每一组一行：普通模式
var input = read_line();
while(input){
    var lines = input.split(' ');  
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}
// 1.2 每一组一行：函数模式
while(input){
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    function add(m,n){
        return m+n;
    }
    print(add(a,b));
}

// 2.1 每一组多行示例 1：第一行一个数n，第二行输入n个数
var input = read_line();
while(input){
    // 获取下面两行每行有多少数据
    var lines = input.split(' ').map(Number)
    var m = lines[0]
    var n = lines[1]

    // 读取两行的内容
    var a = [], b = [];
    while(a.length !== m){
        // a是长度为m的数字数组
        a = read_line().split(' ').map(Number)
    }
    while(b.length !== n){
        // b是长度为n的数字数组
        b = read_line().split(' ').map(Number)
    }
    print(a)
    print(b)
}

// 2.2 每一组多行示例 2：第一行两个数m和n，第二行输入m个数，第三行输入n个数，存为数组a和数组b。
var input = read_line();
while(input){
    // 获取下面两行每行有多少数据
    var lines = input.split(' ').map(Number)
    var m = lines[0]
    var n = lines[1]

    // 读取两行的内容
    var a = [], b = [];
    while(a.length !== m){
        // a是长度为m的数字数组
        a = read_line().split(' ').map(Number)
    }
    while(b.length !== n){
        // b是长度为n的数字数组
        b = read_line().split(' ').map(Number)
    }
    print(a)
    print(b)
}


// 字符串按字符分割成字符数组
var char_arr = read_line().split('')