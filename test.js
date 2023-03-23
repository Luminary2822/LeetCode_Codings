/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-06-17 23:11:34
 * @LastEditTime: 2022-10-10 20:12:02
 */
var binarySearch = function (array,item) {
    // 先将数组进行升序排序
    array.sort((a,b)=>a-b);
    let low = 0, high = array.length - 1, mid, element;
    while (low <= high) {
        // 取中间值，这样声明防溢出
        mid = low + Math.floor((high - low) / 2);
        element = array[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};
let arr = [1,3,5,6,7,11,13,15,45,77]
console.log(binarySearch(arr,13))



