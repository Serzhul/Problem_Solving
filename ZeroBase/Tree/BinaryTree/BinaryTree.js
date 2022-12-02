import Node from "./Node.js";

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(cur) {
    if (cur === null) return;

    console.log(cur.data);
    this.preOrder(cur.left);
    this.preOrder(cur.right);
  }

  inOrder(cur) {
    if (cur === null) return;

    this.inOrder(cur.left);
    console.log(cur.data);
    this.inOrder(cur.right);
  }

  postOrder(cur) {
    if (cur === null) return;

    this.postOrder(cur.left);
    this.postOrder(cur.right);
    console.log(cur.data);
  }
}

const binaryTree = new BinaryTree();

binaryTree.root = new Node("A");
binaryTree.root.left = new Node("B");
binaryTree.root.left.left = new Node("D");
binaryTree.root.left.right = new Node("E");

binaryTree.root.right = new Node("C");
binaryTree.root.right.left = new Node("F");
binaryTree.root.right.right = new Node("G");

binaryTree.root.right.left.left = new Node("L");
binaryTree.root.right.left.right = new Node("M");

console.log("=== PreOrder ===");
binaryTree.preOrder(binaryTree.root);
console.log("=== InOrder ===");
binaryTree.inOrder(binaryTree.root);
console.log("=== PostOrder ===");
binaryTree.postOrder(binaryTree.root);
