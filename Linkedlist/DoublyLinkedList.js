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

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }


    pop() {
        if (!this.head) {
            return null;
        }

        let popedNode = this.tail;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }
        this.length--;
        return popedNode;
    }


    shift() {
        if (!this.head) {
            return null;
        }
        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }

        this.length--;
        return oldHead;
    }

    unShift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }


    get(index) {
        if (index < 0 || index >= this.length || !this.head) {
            return null;
        }

        let current, count;
        if (this.length / 2 >= index) {
            console.log("start from beggining");
            current = this.head;
            count = 0;
            
            while (count !== index) {
                current = current.next;
                count++;
            }
        }else {
            console.log("start from End");
            current = this.tail;
            count = this.length - 1;
            
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
        
    }
}


// 11 -><- 8 <--> 7 <--> 12 ->



let list = new DoublyLinkedList();

// console.log(list.push(12));
// console.log(list.push(22));
// console.log(list.push(32));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
list.unShift(12);
list.unShift(22);
list.unShift(32);
list.unShift(42);
list.unShift(52);
console.log(list.unShift(62));
console.log(list.get(5))