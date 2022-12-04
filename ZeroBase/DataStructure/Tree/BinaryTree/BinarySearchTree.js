/* eslint-disable no-param-reassign */
import Node from "./Node.js";

class BST {
  constructor() {
    this.root = null;
  }

  insert(cur, data) {
    // 현재 노드보다 작은 값이면 left, 큰 값이면 right

    const newNode = new Node(data);

    if (cur === null) {
      this.root = newNode;
      return;
    }

    if (data < cur.data) {
      if (cur.left === null) {
        cur.left = new Node(data);
      } else {
        this.insert(cur.left, data);
      }
    }

    if (data > cur.data) {
      if (cur.right === null) {
        cur.right = new Node(data);
      } else {
        this.insert(cur.right, data);
      }
    }
  }

  search(cur, data) {
    if (cur === null) {
      console.log("[SEARCH] data not found");
      return;
    }

    if (data < cur.data) {
      this.search(cur.left, data);
    }

    if (data > cur.data) {
      this.search(cur.right, data);
    }

    if (data === cur.data) {
      console.log(`[SEARCH] data found! : ${cur.data}`);
    }
  }

  remove(cur, data) {
    if (cur === null) {
      console.log("[REMOVE] data not found");
      return cur;
    }

    if (data < cur.data) {
      cur.left = this.remove(cur.left, data);
    } else if (data > cur.data) {
      cur.right = this.remove(cur.right, data);
    }

    // target 데이터를 발견한 경우
    else {
      if (cur.left === null && cur.right === null) {
        if (cur === this.root) this.root = null;

        return null;
      }

      /** 서브트리가 1개인 경우  */

      // 왼쪽 서브트리만 존재하는 경우
      if (cur.left !== null && cur.right === null) {
        return cur.left;
      }

      // 오른쪽 서브트리만 존재하는 경우
      if (cur.right !== null && cur.left === null) {
        return cur.right;
      }
      /** 서브트리가 2개인 경우  */
      let rightSubTreeNode = cur.right;
      while (rightSubTreeNode.left) {
        rightSubTreeNode = rightSubTreeNode.left;
      }

      cur.data = rightSubTreeNode.data;
      cur.right = this.remove(cur.right, cur.data);
    }

    return cur;
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

const bst = new BST();

bst.insert(bst.root, 20);
bst.insert(bst.root, 15);
bst.insert(bst.root, 13);
bst.insert(bst.root, 11);
bst.insert(bst.root, 14);
bst.insert(bst.root, 25);
bst.insert(bst.root, 22);
bst.insert(bst.root, 21);
bst.insert(bst.root, 24);
bst.insert(bst.root, 30);
bst.insert(bst.root, 32);

console.log("==== PREORDER ==== ");
bst.preOrder(bst.root);

console.log("==== INORDER ==== ");
bst.inOrder(bst.root);

console.log("==== POSTORDER ==== ");
bst.postOrder(bst.root);

bst.search(bst.root, 99);

bst.remove(bst.root, 11);
bst.inOrder(bst.root);

bst.remove(bst.root, 15);
console.log("=== INORDER ===");
bst.inOrder(bst.root);

bst.remove(bst.root, 30);
console.log("=== INORDER ===");
bst.inOrder(bst.root);
