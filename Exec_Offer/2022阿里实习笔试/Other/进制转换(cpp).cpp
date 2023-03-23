/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-08 13:33:37
 * @LastEditTime: 2022-04-08 13:33:38
 */
#include <bits/stdc++.h>
using namespace std;
const int mod = 1e9 + 7;

int main(void)
{
    string s;
    cin >> s;
    int n = s.size();
    vector<int>ans;
    for (int base = 2 ; base <= 16; ++base)
    {
        int res = 0;
        for (int i = 0; i < n; ++i)
        {
            int val = 0;
            if('0' <= s[i]  && s[i] <= '9')
            {
                val = s[i] - '0';
            }
            else
            {
                val = s[i] - 'A' + 10;
            }
            if(val >= base)
            {
                res = -1;
                break;
            }
            res = res * base + val;
            res %= mod;
        }
        if(res != -1)
        {
            ans.push_back(res);
        }
    }
    sort(ans.begin(), ans.end());
    for (auto &x : ans)
    {
        printf("%d\n", x);
    }
    return 0;
}
