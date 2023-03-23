/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-20 19:54:15
 * @LastEditTime: 2022-09-20 20:04:54
 */
// 墙的层数 - 最多出现的缝隙位置次数 = 穿过的最少的砖块，（不包括最后边界）
var leastBricks = function(wall) {
    // 获取墙的层数
    let wallHeight = wall.length
    // 设置哈希表
    let map = new Map()
    for(let i = 0;i < wall.length;i++){
        // 前缀和求每一行墙缝隙出现的位置，用哈希表存储缝隙位置出现的次数
        // j < wall[i].length - 1不包括最后墙的右边界不用计算
        let sum = 0
        for(let j = 0;j < wall[i].length - 1;j++){
            sum += wall[i][j]
            map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
        }
    }
    // 计算哈希表中出现最多的缝隙位置出现的次数，穿过最少的砖块也就是穿过最多的缝隙
    let maxGapCount = 0
    for(let val of map.values()){
        maxGapCount = Math.max(val, maxGapCount)
    }
    return wallHeight - maxGapCount

};