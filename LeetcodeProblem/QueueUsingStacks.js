// question: https://leetcode.com/problems/implement-queue-using-stacks/

class QueueWithStacks {
    constructor() {
        this.in = [];
        this.out = [];
    }

    enQueue(val) {
        this.in.push(val);
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