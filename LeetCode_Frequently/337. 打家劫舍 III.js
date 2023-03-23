/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-02 15:13:15
 * @LastEditTime: 2022-07-02 15:13:42
 */
//  树形dp，每个结点分为抢或者不抢两种情况，抢则左右子树不能抢
var rob = function(root) {
    // 以root为根节点的树中，返回抢劫root节点与不抢劫root节点可获得的最大值
    function _rob(root){
        //  两个0分别表示抢/不抢该节点可获得的最大值
        if(!root) return [0,0]
        // left和right均为二维数组，第一维表示偷该节点获取的金额，第二维表示不偷该节点获取的金额
        // 递归对于以root.left为根节点的树计算抢劫根节点和不抢劫根节点可获得的最大金额，right同理
        let left = _rob(root.left)
        let right = _rob(root.right)
        // 抢该节点，那左右子树都不能抢，加上左右子树都不抢的金额
        let v1 = root.val + left[1] + right[1]
        // 不抢该节点，那左右子树可以抢，选取左右子树各自的最大金额
        let v2 = Math.max(left[0],left[1]) + Math.max(right[0],right[1])
        return [v1,v2]
    }
    // 选取抢或者不抢两种情况的最大值
    return Math.max(..._rob(root))
};