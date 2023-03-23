/*
 * @Description: 进制转换
 * @Author: Luminary
 * @Date: 2022-04-07 20:57:03
 * @LastEditTime: 2022-04-08 19:10:41
 */
/*
2022.04.07阿里笔试第一题：进制转换
题意：输入一个只包含'0-9,A-Z'的字符串，输出其2-16进制的所有可能，输出结果从小到大排序，并对10^9+7取模
知识点1：进制转换，判断某个数是否在某个进制下合法，需要逐位判断是否小于等于该进制
知识点2：大数取模
示例：输入11，输出3,4,5,6,7,8,9,10,11,12,13,14,15,16,17；
     输入FF，输出255
 */
// 定义余数
const mod = 1e9 + 7
// 排序函数
function compare(a, b){
    return a - b
}
// 进制转换
var baseChange = function(input_Num){
    N = input_Num.length
    // 存储不同进制转换后的结果
    let ans = []
    // 遍历所有进制
    for(let base = 2; base < 17; base++){
        let res = 0
        // 遍历输入的每一位
        for(let i = 0;i < N;i++){
            let val = 0
            // 将每一位的数字或者字母转换成值，判断在该进制下是否合法
            if(input_Num[i] >= '0' && input_Num[i] <= '9')
                val = input_Num[i] - '0'
            else
                val = input_Num[i].charCodeAt() - 'A'.charCodeAt() + 10
            if(val >= base){
                res = -1
                break
            }
            // 合法的话逐位计算在该进制下转换出的结果，并取余
            // 这里大数取余知识点：按位取余
            res = res * base + val
            res %= mod
        }
        // 跳出进制合法的话加入数组，不合法的话继续循环下一个进制
        if(res != -1)
            ans.push(res)
    }
    // 结果数组按照升序规则排序
    ans = ans.sort(compare)
    // 遍历输出
    for(let a of ans)
        console.log(a)
    return 0
}


// 测试
// 调用函数
// var input = readline;
// while(input){
//     baseChange(input)
// }
baseChange('11')
baseChange('FF')