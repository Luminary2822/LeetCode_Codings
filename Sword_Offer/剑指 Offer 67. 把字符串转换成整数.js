/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-23 15:58:30
 * @LastEditTime: 2022-04-23 15:58:30
 */
var strToInt = function(str) {
    // str去除首尾空格
    str = str.trim()
    
    // 定义符号位和结果
    let sign = 0, res = 0
    // 首位为负号时候，sign标记为-1，其他情况sign=1
    sign = str[0] === '-' ? -1:1

    for(let i = 0;i < str.length;i++){
        // 如果首位出现正号或者负号，直接循环下一个，特殊情况+-2
        if((str[i] === '+' || str[i] === '-') && i === 0 )
            continue
        // 如果是数字且不等于空格进行计算，不能用isNaN，因为它会将空格按照0处理
        if(str[i] >= '0' && str[i] <= '9' && str[i] !== ' '){
            res = res * 10 + (str[i] - '0')
            // 计算完判断结果是否溢出
            if(res * sign <= -2147483648)  
                return -2147483648
            if(res * sign >= 2147483647)
                return 2147483647
        }
        else
            break   // 不是数字直接跳出循环
    }
    return res * sign
};