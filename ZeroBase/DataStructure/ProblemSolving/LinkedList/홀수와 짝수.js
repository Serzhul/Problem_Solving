import Node from "../../Node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const newNode = new Node(data, null);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
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

// 하나의 Array가 있을 때, 해당 리스트를 홀수 와 짝수로 분리하기

// Sol1 : 직접 구현

const arr = [1, 2, 3, 4, 5, 6, 7];

const oddLinkedList = new LinkedList();
const evenLinkedList = new LinkedList();

arr.forEach((num) => {
  if (num % 2 === 0) {
    evenLinkedList.push(num);
    return;
  }
  oddLinkedList.push(num);
});

oddLinkedList.print();
evenLinkedList.print();
