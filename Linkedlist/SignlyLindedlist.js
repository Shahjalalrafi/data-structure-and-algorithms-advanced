class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unShift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    get(index) {
        if (index < 0 || index > this.length) return null;

        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next
            counter++;
        }

        return current;
    }

    set(index, value) {
        let foundValue = this.get(index);
        if (foundValue) {
            foundValue.val = value;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unShift(val);
            return true;
        };
        if (index === this.length) {
            this.push(val);
            return true;
        };

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        
        this.length--;
        return removed;
    }
}

const list = new SinglyLinkedList()

list.push("hello");
list.push("everyone");
list.push("how");
// list.push("are");
// list.push("YOU?");

// console.log(list)



class Linkedlist {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
    }

    append(value) {
        if(!this.head) {
            return
        }

        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this
    }

}

const linkedList = new Linkedlist(10);
// console.log(linkedList.append(5));
// console.log(linkedList.append(15));
// console.log(linkedList.prepend(2));
// console.log(linkedList);