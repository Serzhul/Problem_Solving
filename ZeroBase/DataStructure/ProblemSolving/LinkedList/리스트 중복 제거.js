/* eslint-disable max-classes-per-file */
class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

// Sol1

// class DoubleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   push(data) {
//     const newNode = new Node(data, null);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//       return;
//     }

//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//   }

//   remove(data) {
//     let cur = this.head;

//     if (cur.data === data) {
//       this.head = cur.next;
//     } else {
//       while (cur !== null) {
//         // 이대로 값 검색이 안되고 끝까지 왔다면
//         if (cur.next === null) return;
//         if (cur.next.data === data) {
//           break;
//         }

//         cur = cur.next;
//       }

//       // 기존 링크를 끊고 그 다음 노드에 연결한다.
//       cur.next = cur.next.next;
//     }
//   }

//   print() {
//     let cur = this.head;

//     const ret = [];

//     while (cur !== null) {
//       ret.push(cur.data);
//       cur = cur.next;
//     }

//     console.log(ret);
//   }
// }

// const arr = [4, 4, 3, 3, 8, 4, 6, 11, 12, 10, 12];
// const obj = {};
// const doubleLinkedList = new DoubleLinkedList();

// arr.forEach((num) => {
//   if (obj[num]) obj[num] += 1;
//   else {
//     obj[num] = 1;
//   }
//   doubleLinkedList.push(num);
// });

// doubleLinkedList.print();

// arr.forEach((num) => {
//   if (obj[num] > 1) {
//     doubleLinkedList.remove(num);
//     obj[num] -= 1;
//   }
// });
// doubleLinkedList.print();

// Sol2

class DoubleLinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  push(data) {
    const newNode = new Node(data, null, null);

    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  filter(countMap) {
    // 첫 더미 노드 다음 ~ 마지막 더미 노드 전
    let cur = this.head.next;
    while (cur.data !== null) {
      if (countMap[cur.data] > 1) {
        countMap[cur.data] -= 1;
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
      }
      cur = cur.next;
    }
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

const arr = [4, 4, 3, 3, 8, 4, 6, 11, 12, 10, 12];

const doubleLinkedList = new DoubleLinkedList();

let countMap = {};

arr.forEach((el) => {
  doubleLinkedList.push(el);
  countMap.hasOwnProperty(el) ? (countMap[el] += 1) : (countMap[el] = 1);
});

doubleLinkedList.print();
doubleLinkedList.filter(countMap);
doubleLinkedList.print();
