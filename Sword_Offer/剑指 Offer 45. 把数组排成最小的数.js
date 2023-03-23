/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-22 22:00:00
 * @LastEditTime: 2022-04-23 14:42:38
 */
 // 自定义排序规则：如果a+b < b+a，则a应该排在b的前面
 var minNumber = function(nums) {
    function my_compare(next_val, cur_val){
        // 将数字转变成字符串
        let str_a = next_val.toString()
        let str_b = cur_val.toString()
        // 比较两个字符串拼接之后的数字大小，按照升序规则返回
        // 如果比较拼接字符串大小的话，会根据第一个不同的字符的ascii值码进行比较，所以要转成数字比较
        let temp_1 = parseInt(str_a + str_b)
        let temp_2 = parseInt(str_b + str_a)
        return temp_1 - temp_2
    }
    let res = nums.sort(my_compare)
    return res.join('')
};