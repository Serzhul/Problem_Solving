import Node from "../../Node.js";

// N명의 학생이 있고, 몇 번째 뒤에 줄을 세워야 하는지 정보가 있을 때, 알맞게 줄을 세운 결과를 출력하기

// Sol1

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data, null);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.size += 1;
  }

  insertFirst(data) {
    const newNode = new Node(data, null);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
  }

  insertAt(data, idx) {
    const newNode = new Node(data, null);

    let cur = this.head;
    let count = 1;

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      return;
    }

    if (idx === 1) {
      this.insertFirst(data);
      return;
    }

    while (cur !== null) {
      if (count + 1 === idx) {
        break;
      }
      cur = cur.next;
      count += 1;
    }
    newNode.next = cur.next;
    cur.next = newNode;
    this.size += 1;
  }

  print() {
    let cur = this.head;

    const ret = [];
    while (cur !== null) {
      ret.push(cur.data);
      cur = cur.next;
    }

    console.log(ret);
  }
}

const info = [1, 1, 1, 3, 2];

const lineLinkedList = new LinkedList();

info.forEach((el, idx) => {
  lineLinkedList.insertAt(idx + 1, el);
});

console.log(lineLinkedList.print());

// Sol2
