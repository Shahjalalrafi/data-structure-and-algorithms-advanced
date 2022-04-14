class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
        return this
    }

    remove() {
        return this.data.pop();
    }

    // peek() {
    //     return this.data.slice(this.data.length - 1, 1);
    // }
}

const q = new Queue();
q.add(2)
q.add(5)
console.log(q.add(3))

console.log(q.remove())