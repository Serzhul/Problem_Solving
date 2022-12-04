import Node from "../../Node.js";
// 정렬된 두 Array가 있을 때, 오름차순으로 하나의 리스트로 합치기

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

const arr1 = [2, 5, 8, 10];
const arr2 = [1, 3, 4, 9, 12];

let idx1 = 0;
let idx2 = 0;

const mergeLinkedList = new LinkedList();

while (true) {
  if (idx1 >= arr1.length || idx2 >= arr2.length) break;
  if (arr1[idx1] > arr2[idx2]) {
    mergeLinkedList.push(arr2[idx2]);
    idx2 += 1;
  } else {
    mergeLinkedList.push(arr1[idx1]);
    idx1 += 1;
  }
}

while (idx1 < arr1.length) {
  mergeLinkedList.push(arr1[idx1]);
  idx1 += 1;
}

while (idx2 < arr2.length) {
  mergeLinkedList.push(arr2[idx2]);
  idx2 += 1;
}

mergeLinkedList.print();
