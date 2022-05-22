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

    //isEmpty
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.peek())
console.log(myStack.push("Discord"));
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
// console.log(myStack)




  //Discord
  //Udemy
  //google
