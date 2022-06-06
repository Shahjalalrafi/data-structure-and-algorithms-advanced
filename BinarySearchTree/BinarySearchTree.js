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

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  // Breadth First Search
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list;
  }

  // Breadth First Serch Recursively
  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }
}

// const tree = new BinarySearchTree();
// console.log(tree.insert(9));
// console.log(tree.insert(4))
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// console.log(tree.lookup(9))
// console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

// <===========Inorder preOrder PostOrder===============>
// Inorder BFS - [1, 4, 6, 9, 15, 20, 170];
// Preorder BFS - [9, 4, 1, 6, 20, 15, 170];
// PostOrder BFS - [1, 6, 4, 15, 170, 20, 9];
// <===========Inorder preOrder PostOrder===============>

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}



// // Binary Search with recursively
// class Bst {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }

//   insert(data) {
//     if (data < this.data && this.left) {
//       return this.left.insert(data);
//     } else if (data < this.data) {
//       return this.left = new Node(data);
//     } else if (data > this.data && this.right) {
//       return this.right.insert(data);
//     } else if (data > this.data) {
//       return this.right = new Node(data);
//     }
//   }

//   contains(data) {
//     if (this.data === data) {
//       return this;
//     }

//     if (this.data < data && this.right) {
//       return this.right.contains(data);
//     } else if (this.data > data && this.left) {
//       return this.left.contains(data);
//     }

//     return null;
//   }
// }

const bst = new BinarySearchTree(2);
bst.insert(3);
bst.insert(5);
bst.insert(15);
bst.insert(25);
bst.insert(4);
bst.insert(2);
bst.insert(1);
console.log(bst.breadthFirstSearch());
console.log(bst.breadthFirstSearchRecursive([bst.root], []));
console.log(bst)