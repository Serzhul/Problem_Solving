import Node from "../Node.js";

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;

    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;

      this.size += 1;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;

    this.size += 1;
  }

  pop() {
    if (this.isEmpty()) return;

    const cur = this.front;
    this.front = this.front.next;

    console.log("팝 됨!", cur.data);
    this.size -= 1;
  }

  print() {
    let cur = this.front;

    console.log(`크기 : ${this.getSize()}`);

    while (cur !== null) {
      console.log(cur.data);
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

const queue = new Queue();

queue.push("월");
queue.print();
queue.push("화");
queue.print();
queue.push("수");
queue.print();
queue.push("목");
queue.print();
queue.push("금");
queue.print();
queue.pop();
queue.print();
