/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-04 20:13:49
 * @LastEditTime: 2022-07-04 21:31:30
 */
// 贪心
// 糖的种类m，最多吃n/2，如果m<n/2，那么在给定个数下吃最多种类即为m
// 如果n/2 < m，那么只能吃n/2种糖
// 答案就是m和n/2的最小值
var distributeCandies = function(candyType) {
    // 糖果种类数为set.size
    let set = new Set(candyType)
    return Math.min(set.size, candyType.length / 2)
};
distributeCandies(1,23,4,5)