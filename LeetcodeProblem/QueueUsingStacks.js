// question: https://leetcode.com/problems/implement-queue-using-stacks/

// we solve this problem with 2 way
// 1. Function Constructor
// 2. class Constructor



// ============ Function Constructor Solution =============
var MyQueue = function () {
    this.stack = [];
    this.newStack = [];
};

MyQueue.prototype.push = function (x) {
    this.stack.push(x);
    return this;
};

MyQueue.prototype.pop = function () {
    if (this.newStack.length === 0) {
        while (this.stack.length) {
            this.newStack.push(this.stack.pop());
        }
    }

    return this.newStack.pop();
};

MyQueue.prototype.peek = function () {
    if (this.newStack.length === 0) {
        while (this.stack.length) {
            this.newStack.push(this.stack.pop());
        }
    }

    return this.newStack[this.newStack.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.stack.length === 0
};
MyQueue.prototype.all = function () {
    return this
};

const queue = new MyQueue();

console.log(queue.empty())
console.log(queue.push(12));
console.log(queue.push(22));
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.all())



// ============ Class Constructor Solution =============

class QueueWithStacks {
    constructor() {
        this.in = [];
        this.out = [];
    }

    enQueue(val) {
        this.in.push(val);
        return this
    }

    dequeue() {
        if(this.out.length === 0) {
            while(this.in.length > 0) {
                this.out.push(this.in.pop())
            }
        }

        return this.out.pop();
    }

    peek() {
        if(this.out.length === 0) {
            while(this.in.length > 0) {
                this.out.push(this.in.pop())
            }
        }

        return this.out[this.out.length - 1]
    }

    isEmpty() {
        return this.in.length === 0 && this.out.length === 0;
    }
}

const queues = new QueueWithStacks();
console.log(queues)