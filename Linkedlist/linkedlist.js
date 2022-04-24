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

    inserFirst(data) {
        this.head = new Node(data, this.head);
    }
}

const list = new LinkedList();
list.inserFirst(15);
list.inserFirst(25);
list.inserFirst(5);
list.inserFirst(75);
// console.log(list.size())

console.log(list)