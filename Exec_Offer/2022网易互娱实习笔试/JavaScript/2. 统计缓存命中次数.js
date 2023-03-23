/*
 * @Description: 统计缓存命中次数
 * @Author: Luminary
 * @Date: 2022-04-15 18:57:45
 * @LastEditTime: 2022-04-15 21:14:59
 */
/*
2022.04.15网易笔试第二题：统计缓存命中次数
题意：输入一组LRU缓存的访问记录，以及缓存大小，请计算缓存的命中次数
LRU的缓存替换算法思路：当缓存容量不足时，LRU会淘汰当前缓存中最近一次访问时间最早的记录。
示例：输入[1,2,1,3,2]和2，输出 1；
    流程：(1)初始缓存为[]
         (2)访问1，缓存未命中，缓存更新为[1]
         (3)访问2，缓存未命中，缓存更新为[2,1]
         (4)访问1，缓存命中，缓存更新为[1,2]
         (5)访问3，缓存未命中，缓存更新为[3,1]
         (6)访问2，缓存未命中，缓存更新为[2,3]
         总命中次数为1
     输入[1,5,1,3,5,2,4,1,2]和4，输出3
 */
// 重点：采用Map数据结构
// Map 这个 ES6 新增数据结构是有序的，即不仅可以存储键值对(关键字-值)，这里的有序指的是map会记录插入的顺序，即为Map 的遍历顺序就是插入顺序
// 还可以通过 delete 和 set 的 API 对数据进行更新，最后 set 的数据默认在 Map 的末尾
// 参考链接：https://leetcode-cn.com/problems/lru-cache/solution/by-smooth-b-9bh4/

// 统计缓存命中次数
var getCount = function(nums, capacity){
    var map = new Map()
    var count = 0
    for(let i = 0;i < nums.length;i++){
        // 如果当前缓存命中，计数加1，删除该关键字，再set进Map的末尾
        if(map.has(nums[i]))
            count += 1
            map.delete(nums[i])
        map.set(nums[i], nums[i])
        // 如果超过容量，最近最少使用已经移动到了map的头部，直接将头部移出即可
        if(map.size > capacity){
            // map.keys()返回键名的迭代器，遍历顺序为插入map的顺序，用.next().value取值
            // 在这里意味着删除map头部元素
            map.delete(map.keys().next().value)
        }
    }
    return count
}
res = getCount([1,5,1,3,5,2,4,1,2],4)
// res = getCount([1,2,1,3,2],2)
console.log(res)