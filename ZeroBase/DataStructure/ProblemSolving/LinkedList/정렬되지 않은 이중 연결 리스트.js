/* eslint-disable max-classes-per-file */
// 하나의 이중 연결 리스트에 노드들이 이어져 있을 때, 오름차순으로 정렬

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
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
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  sort() {
    // 뒤에서 부터 작은값을 앞으로 SWAP 하는 방식으로
    let isSorted;

    do {
      isSorted = false;

      let cur = this.tail;

      while (cur.prev !== null) {
        if (cur.prev.data > cur.data) {
          // swap시 node 자체가 아닌 data만 swap하도록
          [cur.prev.data, cur.data] = [cur.data, cur.prev.data];
          isSorted = true;
        }
        cur = cur.prev;
      }
    } while (isSorted);
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

const arr = [2, 5, 7, 10, 6, 4, 1];
const doubleLinkedList = new DoubleLinkedList();

arr.forEach((el) => doubleLinkedList.push(el));
doubleLinkedList.print();
doubleLinkedList.sort();
doubleLinkedList.print();
