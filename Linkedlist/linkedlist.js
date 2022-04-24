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

    getFirst() {
        return this.head;
    }

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
}

const list = new LinkedList();
list.inserFirst(15);
list.inserFirst(25);
list.inserFirst(5);
list.inserFirst(75);
console.log(list.size())
console.log(list.getFirst())
console.log(list.getLast())

console.log(list)