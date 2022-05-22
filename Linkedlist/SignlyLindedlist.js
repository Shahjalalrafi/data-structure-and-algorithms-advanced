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
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

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



class DoublyLinkedlist {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        if (!this.head) {
            return
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this
    }

    prepend(value) {
        let newNode = {
            value: value,
            next: null,
            prev: null
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this;
    }

    // get(index) {
    //     let node = this.head;
    //     let counter = 0;

    //     while(node) {
    //         if(index === counter) {
    //             return node;
    //         }
    //         counter++;
    //         node = node.next;
    //     }

    //     return null;
    // }

    // insertAt(index, value) {
    //     if(!this.head) {
    //         let newNode = {
    //             value: value,
    //             next: this.head
    //         }
    //         this.head = newNode;
    //         return
    //     }

    //     if(index === 0) {
    //         let newNode = {
    //             value: value,
    //             next: this.head
    //         }
    //         this.head = newNode;
    //         return
    //     }

    //     let previous = this.get(index - 1);
    //     let newNode = {
    //         value: value,
    //         next: previous.next
    //     }
    //     previous.next = newNode;
    //     return this.head;
    // }

    showList() {
        let arr = [];
        let node = this.head;

        while (node) {
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }

    getIndex(index) {
        let node = this.head;
        let counter = 0;

        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    insertAt(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        let newNode = {
            value: value,
            next: null,
            prev: null
        }
        let previous = this.getIndex(index - 1);
        let holdingIndexValue = previous.next;
        previous.next = newNode;
        newNode.prev = previous;
        newNode.next = holdingIndexValue;
        holdingIndexValue.prev = newNode;
        this.length++;
        return this.showList();
    }


    remove(index) {
        if (index >= this.length || !this.head) {
            return
        }

        if (index == 0) {
            this.head = this.head.next;
            return
        }

        let previous = this.getIndex(index - 1);

        let nextNode = previous.next.next;

        previous.next = nextNode;
        this.length--;
        return this.showList();
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.showList();
    }
}


const linkedList = new DoublyLinkedlist(10);
linkedList.append(5);
linkedList.append(15);
linkedList.prepend(2);
// linkedList.prepend(20);
// linkedList.remove(1);
// console.log(linkedList.showList());
console.log(linkedList.insertAt(3, 120));
console.log(linkedList);
console.log(linkedList.showList());
console.log(linkedList.reverse())

