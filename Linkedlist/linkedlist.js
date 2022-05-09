class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // adding node to the list
    inserFirst(data) {
        this.head = new Node(data, this.head);
    }

    // checking how many node have in this list
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    // Getting first node from our linkedlist
    getFirst() {
        return this.head;
    }

    // Getting last node from our linkedlist
    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node
            };
            node = node.next
        }
    }

    // clear all node from our linkedlist
    clear() {
        this.head = null;
    }

    // removing first node from our linkedlist
    removeFirst() {
        if (!this.head) {
            return
        }

        this.head = this.head.next;
    }


    // removing first node from our linkedlist
    removeFirst() {
        if (!this.head) {
            return
        }

        this.head = this.head.next;
    }


    // removing last node from our linkedlist
    removeLast() {
        // if no head nothing will be happen
        if(!this.head) {
            return;
        }
        
        // if there is not more than one node then one head node will be deleted
        if(!this.head.next) {
            this.head = null;
            return;
        }

        // refferencing previous and current node
        let previous = this.head;
        let node = this.head.next;

        // if next node have then previous node will be current node and current node will be next node;
        while(node.next) {
            previous = node;
            node = node.next;
        }

        // after iterating whole list current node will be deleted by setting previous.next node = null;
        previous.next = null;
    }
}

const list = new LinkedList();
list.inserFirst(15);
list.inserFirst(25);
list.inserFirst(5);
list.inserFirst(75);
console.log(list.size());
// list.clear();
// console.log(list.size())
console.log(list.getFirst())
// console.log(list.removeFirst())
// console.log(list.removeFirst())
// console.log(list.removeFirst())
// console.log(list.removeFirst())
console.log(list.removeLast())
console.log(list.getLast())

console.log(list)