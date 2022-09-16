class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        let node = new Node(value);
        if (!this.top) {
            this.top = node;
            this.bottom = node;
        } else {
            let holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this
    }

    pop() {
        if (!this.top) {
            return
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;
        return this
    }
    //isEmpty
}

// Lifo(Last In First Out) approach
const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("Discord"));
// console.log(myStack.peek())
console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())
console.log(myStack)




  //Discord
  //Udemy
  //google
