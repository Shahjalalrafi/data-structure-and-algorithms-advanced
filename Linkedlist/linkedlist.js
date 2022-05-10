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

        // == insert first node using another method(another approach)
        // this.insertAt(0, data);
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

        // == getting last node using another method(another approach)
        // return this.getAt(this.size() -1)
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

        //  // == remove first node using another method(another approach)
        // this.removeAt(0);
    }

    // removing last node from our linkedlist
    removeLast() {
        // if no head nothing will be happen
        if (!this.head) {
            return;
        }

        // if there is not more than one node then one head node will be deleted
        if (!this.head.next) {
            this.head = null;
            return;
        }

        // refferencing previous and current node
        let previous = this.head;
        let node = this.head.next;

        // if next node have then previous node will be current node and current node will be next node;
        while (node.next) {
            previous = node;
            node = node.next;
        }

        // after iterating whole list current node will be deleted by setting previous.next node = null;
        previous.next = null;

        // == remove last node using another method(another approach)
        // this.removeAt(this.size() - 1)
    }


    // adding node at the end of the list
    insetrLast(data) {
        let lastNode = this.getLast();

        if (!this.head) {
            this.head = new Node(data, this.head);
        } else {
            lastNode.next = new Node(data);
        }
    }


    // getting node by index
    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node
            };
            counter++;
            node = node.next;
        }

        return null;
    }


    // removing node by index
    removeAt(index) {
        if (!this.head) {
            return;
        }

        // if want to remove first node then first node will reffer to next next node; 
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        // getting previous node by getAt method
        const previous = this.getAt(index - 1);

        // if no previous node or no node after previous node then nothing will be happen;
        if (!previous || !previous.next) {
            return;
        }

        // after previous node will be one after another node (meaning skipping will be deleted);
        previous.next = previous.next.next;
    }


    // insert anywhere with index number
    insertAt(index, data) {

        // there is no node then data will set to the first node
        if (!this.head) {
            this.head = new Node(data)
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // previous Node = if(this.getAt return null then this.getLast will be previous node)
        let previous = this.getAt(index - 1) || this.getLast();

        const node = new Node(data, previous.next)
        previous.next = node;
    }

    // ForEach Implementation
    forEach(fn) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }
}

const list = new LinkedList();

list.insetrLast("a");
list.insetrLast("b");
list.insetrLast("c");
list.insetrLast("d");


// get midpoint from our linkedlist;
function midPoint(list) {
    let slow = list.head;
    let fast = list.head;

    // if(!fast.next.next) return 

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}



// another approach to get midpoint from linkedlist;
function midPoint(list) {

    let node = list.head;
    let counter = 0;
    let size = Math.ceil(((list.size() - 1) / 2));
    console.log(size)

    while (node) {
        if (counter == size) return node;
        counter++;
        node = node.next;
    }
}

// check circular linkedlist or not
function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}


function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    
    
    while(n) {
        fast = fast.next;
        n--;
    }
    
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}

// console.log(midPoint(list))

console.log(fromLast(list, 2))