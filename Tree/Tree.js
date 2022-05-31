// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

let arr1 = [];
function tr1(node) {
    arr1.push(node.data);
    return arr1;
}
let arr2 = [];
function tr2(node) {
    arr2.push(node.data);
    return arr2;
}

let t = new Tree();
t.root = new Node("a");
t.root.add("b");
t.root.add("c");
t.root.children[0].add("hello")
 
//       a
//     /   \
//   b      c
//  /
// hello

// let letters = [];
// let anotherLetters = [];
console.log("traverseBF",t.traverseBF(tr1));
console.log("traverseDF",t.traverseDF(tr2));
console.log(t);
console.log(arr1);
console.log(arr2);

// let tNode = new Node(4);
// tNode.add(3);
// tNode.add(4);
// tNode.add(4);
// tNode.remove(3);
// tNode.add(7);
// // let tNode3 = new Node(3);
// // tNode3.add(5);
// // tNode3.add(6);
// // tNode3.add(8);
// console.log(tNode);
// console.log(tNode3);