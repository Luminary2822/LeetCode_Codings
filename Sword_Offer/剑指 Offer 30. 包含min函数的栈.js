/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-02 14:02:13
 * @LastEditTime: 2022-07-02 14:02:28
 */
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // 每次push的是一个对象，对象上有两个属性：val和min。val就是当前元素的值，min是当前栈中的最小值。每次push()，相应的min都重新计算，保证栈顶元素的min属性，一直都是最小值。
    // 栈为空，min为当前值，栈不为空，min为当前值和之前min值的最小值
    this.stack.push({
        val: x,
        min: this.stack.length ? Math.min(x, this.min()) : x
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.stack[this.stack.length - 1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */