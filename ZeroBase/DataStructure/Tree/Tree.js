import Node from "./Node.js";

class Tree {
  constructor() {
    this.root = null;
  }

  insert(parentData, data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const parentNode = this.search(parentData);

    if (parentNode === null) return;

    parentNode.child.push(newNode);
  }

  search(targetData) {
    if (this.root === null) return;

    let curNode = this.root;
    let targetNode = null;

    const queue = [];

    queue.push(curNode);

    while (queue.length) {
      curNode = queue.shift();

      if (curNode.data === targetData) {
        targetNode = curNode;
        break;
      }

      const len = curNode.child.length;

      for (let i = 0; i < len; i += 1) {
        queue.push(curNode.child[i]);
      }
    }

    return targetNode;
  }

  remove(targetData) {
    if (this.root === null) return;

    let cur = this.root;

    const queue = [];

    queue.push(cur);

    while (queue.length) {
      cur = queue.shift();

      let targetIdx = -1; // 자식 노드 중 지우고자 하는 타겟의 idx
      let len = cur.child.length;

      for (let i = 0; i < len; i += 1) {
        if (cur.child[i].data === targetData) {
          targetIdx = i;
          break;
        }
      }

      if (targetIdx !== -1) {
        cur.child.splice(targetIdx, 1);
        break;
      }

      len = cur.child.length;

      for (let i = 0; i < len; i += 1) {
        queue.push(cur.child[i]);
      }
    }
  }

  print() {
    console.log("=== print ===");

    let cur = this.root;

    const queue = [];
    queue.push(cur);

    while (queue.length) {
      cur = queue.shift();
      console.log(`cur`, cur);

      const len = cur.child.length;

      for (let i = 0; i < len; i += 1) {
        queue.push(cur.child[i]);
      }
    }
  }
}

const tree = new Tree();

tree.insert(null, "A");
tree.insert("A", "B");
tree.insert("A", "C");
tree.insert("B", "D");
tree.insert("B", "E");
tree.insert("B", "F");
tree.insert("C", "G");

tree.remove("B");
tree.print();
