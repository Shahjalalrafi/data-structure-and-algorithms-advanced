class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}



let list = new DoublyLinkedList();

console.log(list.push(12));
console.log(list.push(22));