/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-09-24 20:50:23
 * @LastEditTime: 2022-09-24 20:50:33
 */
var canCompleteCircuit = function(gas, cost) {
    let gasCode = 0
    let costCode = 0
    for(let i = 0;i < gas.length;i++){
        gasCode += gas[i]
    }
    for(let i = 0;i < cost.length;i++){
        costCode += cost[i]
    }
    // 总的汽油量如果小于总路程，肯定开不到终点
    if(gasCode < costCode)
        return -1
    let currentGas = 0
    let start = 0
    // 从第一个位置开始，如果中途断了，那么刚刚走过的路，也是在此地就中断的
    // 因此我们只需要在断点开始（作为起始点），如果能走到终点，就能到达所有的地方
    for(let i = 0;i < gas.length;i++){
        currentGas = currentGas - cost[i] + gas[i]
        if(currentGas < 0){
            currentGas = 0
            start = i + 1
        }       
    }
    return start
};