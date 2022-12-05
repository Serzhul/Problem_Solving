/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable max-classes-per-file */
// 전위 순회, 중위 순회. 후위 순회
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(parent, left, right) {
    if (left) parent.left = left;

    if (right) parent.right = right;
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

const arr = [
  ["A", "B", "C"],
  ["B", "D", "."],
  ["C", "E", "F"],
  ["E", ".", "."],
  ["F", ".", "G"],
  ["D", ".", "."],
  ["G", ".", "."],
];

const nodeMap = {};
const tree = new Tree();

arr.forEach((el) => {
  const [root, left, right] = el;

  if (root !== "." && !nodeMap.hasOwnProperty(root)) {
    const node = new Node(root, null, null);
    nodeMap[root] = node;
  }

  if (left !== "." && !nodeMap.hasOwnProperty(left)) {
    const node = new Node(left, null, null);
    nodeMap[left] = node;
  }

  if (right !== "." && !nodeMap.hasOwnProperty(right)) {
    const node = new Node(right, null, null);
    nodeMap[right] = node;
  }

  tree.add(nodeMap[root], nodeMap[left], nodeMap[right]);
});

console.log("=== preOrder ===");
tree.preOrder(nodeMap.A);

console.log("=== inOrder ===");
tree.inOrder(nodeMap.A);

console.log("=== postOrder ===");
tree.postOrder(nodeMap.A);
