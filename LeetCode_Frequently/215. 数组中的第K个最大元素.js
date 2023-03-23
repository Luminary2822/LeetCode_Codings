/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-19 21:53:06
 * @LastEditTime: 2022-04-19 21:53:07
 */
// 法一：快排优化
// 判断当前确定的节点下标是否等于nums.length - k，等于则找到；
// 大于则向后找，小于则往前找。减少排序负载。
var findKthLargest = function(nums, k) {
    if(!nums.length) return -1
    let key = nums.length - k
    let quickSort = function(arr, start, end) {
        if(start >= end) return
        let temp = arr[start]
        let i = start, j = end
        while(i<j) {
            while(i<j && temp <= arr[j]) j--
            arr[i] = arr[j]
            while(i<j && temp >= arr[i]) i++
            arr[j] = arr[i]
        }
        arr[i] = temp
        // 快排优化，判断当前确定的下标是否是要找的位置如，如果是直接返回
        if(i == key)
            return 
        // 当前确定的下标大于要找的位置k，则向左找
        else if(i > key)
            quickSort(arr,start, i-1)
        // 当前确定的下标小于要找的位置k，则向右找
        else
            quickSort(arr,i+1, end)
    }
    quickSort(nums, 0, nums.length-1)
    return nums[key]
};



// 法二：只传入数组的全部快排
var findKthLargest = function(nums, k) {
    function quickSort(arr) {
        if(arr.length <= 1) return arr
        var pivotIndex  = Math.floor(arr.length / 2)
        // splice找到pivotIndex。删除arr[pivotIndex]这个位置的元素，
        // 返回删除元素的数组
        var pivot = arr.splice(pivotIndex, 1)[0]
        let left = [], right = [];
        for(let i = 0;i < arr.length; i++) {
            if(arr[i] < pivot) 
                left.push(arr[i]);
            else 
                right.push(arr[i]);
        }
        return quickSort(left).concat(pivot,quickSort(right));
    }
    let res = quickSort(nums)
    return res[res.length-k]
};

// 法三：传入数组和起始位置的全部快排
var findKthLargest = function(nums, k) {
    if(!nums.length) return -1
    let quickSort = function(arr, start, end) {
        if(start >= end) return
        let temp = arr[start]
        let i = start, j = end
        while(i<j) {
            while(i<j && temp <= arr[j]) j--
            arr[i] = arr[j]
            while(i<j && temp >= arr[i]) i++
            arr[j] = arr[i]
        }
        arr[i] = temp
        quickSort(arr,start, i-1)
        quickSort(arr,i+1, end)
    }
    quickSort(nums, 0, nums.length-1)
    console.log(nums)
    return nums[nums.length-k]
};


let nums = [3,2,3,1,2,4,5,5,6]
let k = 4
let res = findKthLargest(nums, k)
console.log(res)