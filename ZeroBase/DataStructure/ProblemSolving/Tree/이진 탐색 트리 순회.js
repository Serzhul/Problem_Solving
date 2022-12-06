/* eslint-disable max-classes-per-file */
// 이진 탐색 트리

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  init(data) {
    this.root = new Node(data);
  }

  insert(cur, data) {
    if (cur === null) return;

    if (cur.data > data) {
      if (cur.left === null) {
        cur.left = new Node(data);
      } else {
        this.insert(cur.left, data);
      }
    } else {
      if (cur.right === null) {
        cur.right = new Node(data);
      } else {
        this.insert(cur.right, data);
      }
    }
  }

  preOrder(cur) {
    console.log(cur);
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

// 이진 탐색 트리에서 특정 서브 트리에서 삽입할 때, 작은 값은 왼쪽, 큰 값은 오른쪽으로 감
// 왼쪽 먼저, 그 다음 오른쪽 순서이므로 이진 탐색트리에서 전위순회결과는 삽입과 동일한 방식을 갖는다.
const arr = [50, 30, 24, 5, 28, 45, 98, 52, 60];

const bst = new BST();

let isInit = true;
arr.forEach((el) => {
  if (isInit) {
    isInit = false;
    bst.init(el);
  } else {
    bst.insert(bst.root, el);
  }
});

console.log(`=== PREORDER ===`);
bst.preOrder(bst.root);
console.log(`=== INORDER ===`);
bst.inOrder(bst.root);
console.log(`=== POSTORDER ===`);
bst.postOrder(bst.root);
