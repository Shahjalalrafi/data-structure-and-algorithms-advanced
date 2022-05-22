class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        let node = new Node(value);

        if(!this.first) {
            this.first = node;
            this.last = node;
        }else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
        return this;
    }

   
}

let myQueue = new Queue();
console.log(myQueue.enqueue("google"));
console.log(myQueue.peek());
console.log(myQueue.enqueue("descord"));
console.log(myQueue.enqueue("youtube"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());