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

  removeByJosephus(k) {
    let cur = this.head;

    const ret = [];

    while (this.size > 0) {
      let count = 1;
      while (count < k) {
        count += 1;
        cur = cur.next;
      }

      cur.prev.next = cur.next;
      cur.next.prev = cur.prev;

      ret.push(cur.data);
      // 만약에 제거 대상이 head 라면, head도 변경해줘야함
      if (this.head === cur) {
        this.head = this.head.next;
      }

      cur = cur.next;
      this.size -= 1;
    }
    console.log(ret);
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
}

const N = 7;
const K = 3;

const arr = Array.from({ length: N }, (_, idx) => idx + 1);

const circularLinkedList = new CircularLinkedList();
arr.forEach((num) => circularLinkedList.push(num));

circularLinkedList.removeByJosephus(K);
