class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class Bst {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (current) {
                // if value in greater than current value then go to right
                if (value > current.value) {
                    // if no right node after current node then new node will be right side on after current node
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }

                    // otherwise current node will be right next node
                    current = current.right;

                    // if value in smaller than current value then go to left
                } else {

                    // if no left node after current node then new node will be left side on after current node
                    if (value < current.value) {
                        if (!current.left) {
                            current.left = newNode;
                            return this;
                        }

                        // otherwise current node will be left next node
                        current = current.left;
                    }
                }
            }
        }
        return false;
    }
}

let bstTree = new Bst();

bstTree.insert(12);
bstTree.insert(22);
bstTree.insert(32);
bstTree.insert(10);
bstTree.insert(26);
bstTree.insert(21);

console.log(bstTree)