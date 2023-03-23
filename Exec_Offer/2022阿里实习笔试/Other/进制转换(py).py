'''
Description: 
Author: Luminary
Date: 2022-04-08 12:03:29
LastEditTime: 2022-04-08 12:03:29
'''
import sys
import collections
readline = sys.stdin.readline


def readstr() -> str:
    return readline().strip()


s = readstr()
if s == "0" * len(s):
    print(0)
else:
    s_list = list(s)
    counter = collections.Counter(s)
    max_num = max(s_list)
    hashmap = {"F": 16,
               "E": 15,
               "D": 14,
               "C": 13,
               "B": 12,
               "A": 11,
               "9": 10,
               "8": 9,
               "7": 8,
               "6": 7,
               "5": 6,
               "4": 5,
               "3": 4,
               "2": 3,
               "1": 2
               }
    index = hashmap[max_num]
    ans = set()
    MOD = 10 ** 9 + 7
    for i in range(index, 17):
        temp = int(s, i)
        temp %= MOD
        ans.add(temp)
    sorted_ans = sorted(ans)
    for i in range(len(sorted_ans)):
        print(sorted_ans[i])