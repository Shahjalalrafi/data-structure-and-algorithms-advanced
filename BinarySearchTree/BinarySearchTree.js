class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        //Code here
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.value > value) {
                    //  go to left
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    //   go to right
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }


        return this;
    }
    lookup(value) {
        //Code here
        if (!this.root) {
            return false;
        } else {
            let currentNode = this.root
            while (currentNode) {
                if (currentNode.value === value) {
                    return currentNode;
                } else if (currentNode.value > value) {
                    // go to the left
                    currentNode = currentNode.left;
                } else if (currentNode.value < value) {
                    currentNode = currentNode.right;
                }
            }
        }
        return false
    }
    // remove
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
console.log(tree.insert(4))
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(9))
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
