/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-06 21:12:08
 * @LastEditTime: 2022-04-06 21:39:05
 */
var getLeastNumbers = function(arr, k) {
    // 让数组真实数据从下标1开始，下标0放哨兵，我先初始化为 -1，任意值都行
    arr.unshift(-1);
    sorted(arr, 1, arr.length - 1);
    return arr.slice(1, k + 1);
};

const quickSort = (arr, start, end) => {
    // 数组第一位是哨兵位，存 start 指针对应的数先
    arr[0] = arr[start];

    while(start  < end) {
        // right 指针向左遍历，直到找到第一个比 哨兵num 要小的数，因为要替换到左边
        while(start < end && arr[end] >= arr[0])
            end--;
        arr[start] = arr[end];
        // left 指针向右遍历，直到找到第一个比 哨兵num 要大的数，因为要替换到右边
        while(start < end && arr[start] <= arr[0])
            start++;
        arr[end] = arr[start];
    }
    arr[start] = arr[0];
    return start;
}

const sorted = (arr, start, end) => {
    if(start < end) {
        const now = quickSort(arr, start, end); // 哨兵划分
        sorted(arr, start, now - 1); // 对左边继续分治
        sorted(arr, now + 1, end); // 对右边继续分治
    }
}

console.log(getLeastNumbers([2,1,3,5,4], 4))