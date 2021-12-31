class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
        this.size++
        this.storage[this.size] = element
        console.log(this.storage)
    }

    pop() {
        let deleteItem = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        console.log(deleteItem)
    }

    peek() {
        console.log(this.storage[this.size])
    }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.peek()
stack.pop()
stack.push(300)
stack.peek()
