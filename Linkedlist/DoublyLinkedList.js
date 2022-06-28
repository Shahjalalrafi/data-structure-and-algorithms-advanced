class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }


    pop() {
        if(!this.head) {
            return null;
        }

        let popedNode = this.tail;

        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }
        this.length--;
        return this;
    }


    shift() {
        if(!this.head) {
            return null;
        }
        let oldHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }

        this.length--;
        return oldHead;
    }
}


let list = new DoublyLinkedList();

console.log(list.push(12));
console.log(list.push(22));
console.log(list.push(32));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());