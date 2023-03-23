/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-04-29 12:08:14
 * @LastEditTime: 2022-04-29 13:57:42
 */
// 法一：递归分治，判断所有子树的正确性
// 本题的解题关键：二叉搜索树的后序遍历，最后一个元素是根节点
// 时间复杂度 O(N^2) 空间复杂度 O(N)
var verifyPostorder = function(postorder) {
    // 记录输入的序列长度
    let N = postorder.length
    // 只有一个根结点或者为空，均是正确的后序遍历结果
    if(N <= 1)
        return true
    // 找到根节点
    let root = postorder[N-1]
    // 区分左右子树
    let index = 0

    // 记录第一个比根节点大的点，作为左右子树的分割点
    // 特殊情况：有的序列没有右子树，则分割左右子树的位置就是根节点所在的位置，右子树即为空数组[]，比如[4, 6, 7, 5]
    for(let i = 0;i < N;i++){
        if(postorder[i] >= root){
            index = i
            break
        }
    }
    // 左子树
    let leftTree = postorder.slice(0,index);
    // 右子树
    let rightTree = postorder.slice(index,N-1);

    // 如果右子树的每一个节点都大于根节点，则继续递归判断，反之为false
    // 如果右子树为空则every()方法直接返回true，进入递归
    if (rightTree.every((value) => value > root)) {
        return verifyPostorder(leftTree) && verifyPostorder(rightTree);
    } else {
        return false;
    }
};

// 法二：单调递增栈
// 将后序遍历逆序，向右走的过程value是逐渐增加的，可以构造单调递增栈记录遍历的顺序。出现value小于栈顶元素说明进入左子树，需要不断弹出栈寻找左子树的根
// 继续遍历，之后左子树的点都必须小于子树的根
var verifyPostorder = function(postorder) {
    let stack = []
    // 初始化根节点无穷大
    let parent = Number.MAX_SAFE_INTEGER
    // 逆序遍历：根-右-左
    for(let i = postorder.length - 1;i >= 0;i--){
        let cur = postorder[i]
        // 如果栈顶元素不为空，当前遍历元素小于栈顶元素，则说明当前元素应该为左子树
        // 找到这个左子树对应的根节点，之前右子树（大于当前结点的）全部弹出，不再记录
        while(stack.length && stack[stack.length - 1] > cur)
            parent = stack.pop()
        // 当前左子树元素必须小于子树的根，否则不满足二叉搜索树
        if(cur > parent)
            return false
        // 新元素入栈
        stack.push(cur)
    }
    return true
};