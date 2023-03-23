// nums是无重复数字的序列
var permute = function(nums) {
    let res = []
    function backtrace(nums, path){
        // 当传入数组中可用的数已经用完时，将当前路径加入结果数组
        if(nums.length == 0){
            res.push(path)
            return
        }
        // 遍历传入的nums数组
        for(let i = 0;i < nums.length;i++){
            // 除去nums[i]以外剩余元素组成的数组，path加入当前遍历的数，递归继续进行排列
            backtrace(nums.slice(0,i).concat(nums.slice(i+1)), path.concat([nums[i]]))
        }       
    }
    // 递归起点
    backtrace(nums,[])
    return res
};