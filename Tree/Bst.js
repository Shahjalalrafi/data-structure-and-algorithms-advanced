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


    // Find Method
    find(value) {
        if (!this.root) {
            return null;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value == value) {
                return currentNode;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }


    // Breadth first Search
    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    //     9
    //  4     20
    //1  6  15  170

    // <===========Inorder || preOrder || PostOrder===============>
    // Inorder BFS - [1, 4, 6, 9, 15, 20, 170];
    // Preorder BFS - [9, 4, 1, 6, 20, 15, 170];
    // PostOrder BFS - [1, 6, 4, 15, 170, 20, 9];
    // <===========Inorder || preOrder || PostOrder===============>


    // Depth first search pre-order solution
    DFSpreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
   
   
    // Depth first search post-order solution
    DFSpostOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }
   
    // Depth first search in-order solution
    DFSinOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);

        }

        traverse(this.root);
        return data;
    }
}

let bstTree = new Bst();

bstTree.insert(9);
bstTree.insert(4);
bstTree.insert(20);
bstTree.insert(1);
bstTree.insert(6);
bstTree.insert(15);
bstTree.insert(170);




console.log(bstTree)
console.log(bstTree.find(22));
// console.log(bstTree.BFS());
console.log(bstTree.DFSpreOrder());
console.log(bstTree.DFSpostOrder());
console.log(bstTree.DFSinOrder());