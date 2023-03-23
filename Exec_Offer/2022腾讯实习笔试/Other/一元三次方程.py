'''
Description: 
Author: Luminary
Date: 2022-04-24 21:49:18
LastEditTime: 2022-04-24 21:49:20
'''

# 一元三次方程，注意和题目的格式区别：ax^3 + bx^2 + cx + d = 0
def newton(x0=0.001, *, a = 1, b, c, d, e=1e-6):
    x_n = x0 - ((a * x0 ** 3 + b * x0 ** 2 + c * x0 + d) /
                (3 * a * x0 ** 2 + 2 * b * x0 + c))
    while abs(x_n - x0) > e:
        x0 = x_n
        x_n = x0 - ((a * x0 ** 3 + b * x0 ** 2 + c * x0 + d) / 
                (3 * a * x0 ** 2 + 2 * b * x0 + c))
    return x_n


# 这里的b，c，d对应输入的a，b，-c。
res_1 = newton(b = 1, c = 2, d = -3)
res_2 = newton(b = 1,c = 1,d = -1)
res_3 = newton(b = 123,c = 333,d = -22222)
res_4 = newton(b = 1,c = 1,d = -3)
print(format(res_1, '.8f')) # 0.84373428
print(format(res_2, '.8f'))# 0.54368901
print(format(res_3, '.8f'))# 11.66870738
print(format(res_4, '.8f'))# 1.00000000