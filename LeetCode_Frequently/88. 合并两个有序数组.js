/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-05-28 15:08:46
 * @LastEditTime: 2022-05-28 15:09:03
 */
// 双指针，时间复杂度和空间复杂度都是O(m+n)
var merge = function(nums1, m, nums2, n) {
    let temp = []
    let p1 = 0, p2 = 0
    // 双指针遍历两个数组，每次取两个数字头部小数字比较，较小的放入结果数组中
    // 两个指针同时到达尾部才算结束
    while(p1 < m || p2 < n){
        // 如果p1===m 则说明nums1中的数据对比完了,直接将nums2的循环推入数组
        if(p1 === m)
            temp.push(nums2[p2++])
        // 如果p2===n 则说明nums2中的数据对比完了,直接将nums1的循环推入数组
        else if(p2 === n)
            temp.push(nums1[p1++])
        else if(nums1[p1] < nums2[p2])
            temp.push(nums1[p1++])
        else
            temp.push(nums2[p2++])
    }
    // 将结果数组的内容放到nums1中，因为它要求合并到nums1中
    for(let i = 0;i < m + n;i++){
        nums1[i] = temp[i]
    }
};