/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-25 21:11:57
 * @LastEditTime: 2022-04-25 21:17:31
 */
// 二维dp
var dicesProbability = function(n) {
    // dp[i][j] ，表示投掷完 i 枚骰子后，点数 j 的出现次数。
    // 2个筛子，取值从2到2*6结束
    let dp = new Array(n + 1).fill().map(() => new Array(n * 6 + 1).fill(0)), result = [];
    // 初始化第一行，即一个骰子时，取值都为 1，因为出现次数只为 1 次，且各值取值只能为 1 ~ 6
    for(let i = 1; i <= 6; i++) {
        dp[1][i] = 1;
    }
    // 直接计算从第二个骰子开始，一直到第 n 个骰子的 dp
    for(let i = 2; i <= n; i++) {
        // 骰子取值范围是 i 到 6 * i
        for(let j = i; j <= 6 * i; j++) {
            for(let cur = 1; cur <= 6; cur++) {
                if(j <= cur)
                    break;
                dp[i][j] += dp[i - 1][j - cur];
            }
        }
    }
    // 只取n个筛子时对应索引范围[n,n*6]内的出现次数即可，同时除以总数就是平均概率
    let all = Math.pow(6, n);
    for(let i = n; i <= n * 6; i++) {
        result.push(dp[n][i] / all);
    }
    return result;

};