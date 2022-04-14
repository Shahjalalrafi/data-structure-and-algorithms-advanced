// Implementation Queue => Principle is FIFO(First in First out)

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}


// Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'


function weave(sourceOne, sourceTwo) {
    const q = new Queue();
  
    while (sourceOne.peek() || sourceTwo.peek()) {
      if (sourceOne.peek()) {
        q.add(sourceOne.remove());
      }
  
      if (sourceTwo.peek()) {
        q.add(sourceTwo.remove());
      }
    }
  
    return q;
  }


let sOne = new Queue();
sOne.add(1)
sOne.add(2)

let sTwo = new Queue();
sTwo.add("Hi")
sTwo.add("There")

console.log(sOne)
console.log(sTwo)

let w = weave(sOne, sTwo)
console.log(w)

console.log(sOne)
console.log(sTwo)
