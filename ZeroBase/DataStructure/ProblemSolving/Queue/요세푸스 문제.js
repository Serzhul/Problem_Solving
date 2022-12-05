/* eslint-disable max-classes-per-file */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;

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
    if (this.isEmpty()) return null;

    this.front = this.front.next;
    this.size -= 1;
  }

  getFront() {
    if (this.isEmpty()) return null;

    return this.front.data;
  }

  print() {
    let cur = this.front;

    const ret = [];
    while (cur !== null) {
      ret.push(cur.data);
      cur = cur.next;
    }

    console.log(ret);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

const N = 7;
const K = 3;
const arr = Array.from({ length: N }, (_, idx) => idx + 1);

console.log(arr);

const queue = new Queue();

arr.forEach((el) => queue.push(el));

const ret = [];

while (!queue.isEmpty()) {
  for (let i = 1; i < K; i += 1) {
    const val = queue.getFront();
    queue.pop();
    queue.push(val);
  }

  ret.push(queue.getFront());
  queue.pop();
}

console.log(ret);
