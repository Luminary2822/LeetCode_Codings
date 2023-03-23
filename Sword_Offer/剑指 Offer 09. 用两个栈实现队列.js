/*
 * @Description: 
 * @Author: Luminary
 * @Date: 2022-07-02 14:24:07
 * @LastEditTime: 2022-07-02 14:24:14
 */
// 双栈不能使用shift，只能使用push和pop
var CQueue = function() { 
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
    return null

};

/**
 * @return {number}
 */
//  stack1存储队列元素，借助stack2实现先入先出的队列操作
CQueue.prototype.deleteHead = function() {
    // 如果两个栈均为空，说明没有要删除的结点返回-1
    if(!(this.stack1.length || this.stack2.length)) return -1
    // 当stack2空了时才将stack1中的元素加入到stack2
    if(!this.stack2.length){
        // 将stack1中的元素加入stack2中再输出
        while(this.stack1.length) {
            let val = this.stack1.pop()
            this.stack2.push(val)
        }
    }
    return this.stack2.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */