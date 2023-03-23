/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-05-28 14:56:33
 * @LastEditTime: 2022-05-28 14:56:41
 */
var findDiagonalOrder = function(nums) {
    // 收集/方向的对角线
    // i+j作为键，对角线上的数字作为值数组，方向按照右上到左下的顺序存储的
    var map = {}
    for(let i = 0;i < nums.length;i++){
        for(let j = 0;j < nums[i].length;j++){
            if(!map[i+j]) map[i+j] = []
            map[i+j].push(nums[i][j])
        }
    }

    // 按照题意顺序输出，键会自动排序01234，也就是我们要输出的顺序，值数组要逆序输出
    let res = []
    for(let key in map){
        for(let j = map[key].length - 1;j >= 0;j--){
            res.push(map[key][j])
        }
    }
    return res
};