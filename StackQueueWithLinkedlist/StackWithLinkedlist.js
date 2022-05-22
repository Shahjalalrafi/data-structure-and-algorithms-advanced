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
