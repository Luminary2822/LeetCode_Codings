/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-02 13:04:08
 * @LastEditTime: 2022-04-02 13:23:59
 */
// 法一 ：遍历
// 寻找后一个小于前一个的数，当前的后一个就是最小值
var minArray = function(numbers) {
    for(let i = 0; i < numbers.length; i++){
         if(numbers[i] > numbers[i+1])
             return numbers[i+1]
     }
     return numbers[0]
};

// 法二：二分查找，时间O(log(n))
// 升序数组旋转后局部有序，利用二分查找寻找数组最小值
 var minArray = function(numbers) {
    let low = 0, mid
    let high = numbers.length - 1
    // 数组最后一位的值是旋转点，判断旋转点与当前mid元素大小
    while(low <= high){
        mid = low + Math.floor((high - low) / 2)
        // mid < 旋转点，说明最小值mid以及mid左边，high指针移动到mid
        if(numbers[mid] < numbers[high])
            high = mid
        // mid > 旋转点，说明mid是被旋转放在前面的部分，最小值在mid右边且不包括mid，low指针移动到mid+1
        else if(numbers[mid] > numbers[high])
            low = mid + 1
        // mid = 旋转点，说明mid和旋转点相等且一定是相邻元素（原升序），high指针左移除去一位相同元素
        else
            high = high - 1
    }
    return numbers[low]
};
