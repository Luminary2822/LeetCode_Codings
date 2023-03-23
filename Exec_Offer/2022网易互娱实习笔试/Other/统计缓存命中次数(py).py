'''
Description: 
Author: Luminary
Date: 2022-04-15 19:18:41
LastEditTime: 2022-04-15 20:26:08
'''
'''
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
'''
# 参考链接：https://leetcode-cn.com/problems/lru-cache/solution/by-jam007-4mhi/
from collections import OrderedDict
def getCount(nums, capacity):
    cache = OrderedDict()
    count = 0
    for i in range(len(nums)):
        if nums[i] in cache:
            count += 1
            del cache[nums[i]]
        cache[nums[i]] = nums[i]
        if len(cache) > capacity:
            # 删除第一个加入的
            cache.popitem(last=False)
    return count

# a = getCount([1,5,1,3,5,2,4,1,2],4) # 3
a = getCount([1,2,1,3,2],2)  # 2
print(a)
