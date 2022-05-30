function levelWidth(root) {
    let arr = [root, "s"];
    let width = [0];

    while(arr.length > 1) {
        const node = arr.shift();
        if(node === "s") {
            arr.push("s");
            width.push(0);
        }else {
            arr.push(...node.children)
            width[width.length - 1]++;
        }
    }
    return width;
}

// You shouldn't need to modify this class
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}