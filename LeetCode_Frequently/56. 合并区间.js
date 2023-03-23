/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-24 21:36:04
 * @LastEditTime: 2022-09-24 21:36:09
 */
var merge = function(intervals) {
    // 先对每个区间左端点做升序排序
    intervals.sort((a,b)=>a[0] - b[0])
   
    const res = [intervals[0]]
    for(let i = 0;i < intervals.length;i++){
        // 如果待合并左端点大于已合并区间右端点，无重叠，放入结果数组
        if(intervals[i][0] > res[res.length - 1][1])
            res.push(intervals[i])
        // 发生区间重叠，取最大的右边界，将待合并区间右端点更新为已合并与待合并右端点的最大值
        else{
            res[res.length-1][1] = Math.max(intervals[i][1], res[res.length - 1][1])
        }
    }
    return res
};