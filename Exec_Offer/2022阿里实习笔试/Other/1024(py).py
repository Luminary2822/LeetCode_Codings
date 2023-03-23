'''
Description: 1024
Author: Luminary
Date: 2022-04-08 13:50:36
LastEditTime: 2022-04-08 15:35:20
'''
import sys
import heapq
from typing import List
readline = sys.stdin.readline


def readint() -> int:
    return int(readline().strip())


def readints() -> List[int]:
    return list(map(int, readline().strip().split()))


n = readint()
nums = readints()
heapq.heapify(nums)

while len(nums) >= 2:
    first = heapq.heappop(nums)
    second = heapq.heappop(nums)
    if first == second:
        heapq.heappush(nums, first + second)
    else:
        heapq.heappush(nums, second)
print(nums[0])