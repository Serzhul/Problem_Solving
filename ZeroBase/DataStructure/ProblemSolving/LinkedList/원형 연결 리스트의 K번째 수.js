/* eslint-disable max-classes-per-file */
export default class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data, null, null);

    if (this.head === null) {
      this.head = newNode;
      this.head.next = this.head;
      this.head.prev = this.head;
      this.size += 1;
      return;
    }

    newNode.next = this.head;
    newNode.prev = this.head.prev;

    this.head.prev.next = newNode;
    this.head.prev = newNode;

    this.size += 1;
  }

  print() {
    let cur = this.head;

    let isStart = false;

    const ret = [];
    while (!isStart || cur !== this.head) {
      isStart = true;
      ret.push(cur.data);

      cur = cur.next;
    }

    console.log(ret);
  }

  search(k) {
    const idx = k % this.size;

    let cur = this.head;

    let count = 1;

    while (count < idx) {
      count += 1;
      cur = cur.next;
    }

    console.log(cur.data);
  }
}

const arr = [3, 6, 9, 1, 2, 4, 7];
const K = 208;
const circularLinkedList = new CircularLinkedList();
arr.forEach((el) => circularLinkedList.push(el));

circularLinkedList.print();
circularLinkedList.search(K);
