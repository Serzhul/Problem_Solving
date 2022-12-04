import Node from "../Node.js";

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.top = newNode;
      this.size += 1;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.size += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    this.top = this.top.next;
    this.size -= 1;
  }

  print() {
    let cur = this.top;

    console.log(`크기 : ${this.getSize()}`);
    while (cur !== null) {
      console.log(cur.data);
      //   console.log(cur.data);
      cur = cur.next;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

const newStack = new Stack();

newStack.push("월");
newStack.print();
newStack.push("화");
newStack.print();
newStack.push("수");
newStack.print();
newStack.pop();
newStack.print();
newStack.pop();
newStack.print();
