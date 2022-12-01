import Node from "../Node.js";
// // 원형 큐 : Producer-Consumer 구조에서 사용할 수 있음

// class CircularQueue {
//   constructor() {
//     this.front = null;
//     this.rear = null;

//     this.size = 8;
//     this.count = 0;

//     for (let i = 0; i < this.size; i += 1) {
//       const newNode = new Node(null, null);

//       if (i === 0) {
//         this.front = newNode;
//         this.rear = newNode;
//       } else if (i === this.size - 1) {
//         this.rear.next = newNode;
//         this.rear = newNode;

//         this.rear.next = this.front;
//         this.rear = this.front;
//       } else {
//         this.rear.next = newNode;
//         this.rear = newNode;
//       }
//     }
//   }

//   push(data) {
//     if (this.rear.next !== this.front) {
//       this.rear = this.rear.next;
//       this.rear.data = data;
//       this.count += 1;
//     }
//   }

//   pop() {
//     if (this.front !== this.rear) {
//       this.front = this.front.next;
//       console.log(`pop 결과: ${this.front.data}`);

//       this.front.data = null;

//       this.count -= 1;
//     }
//   }

//   print() {
//     let cur = this.front.next;

//     console.log(`크기 : ${this.count}`);

//     while (cur !== this.front) {
//       console.log(cur.data);
//       cur = cur.next;
//     }
//   }

//   getSize() {
//     return this.count;
//   }

//   isEmpty() {
//     return this.front === this.rear;
//   }
// }
// const circularQueue = new CircularQueue();

// circularQueue.push("월");
// circularQueue.print();
// circularQueue.push("화");
// circularQueue.print();
// circularQueue.push("수");
// circularQueue.print();
// circularQueue.push("목");
// circularQueue.print();
// circularQueue.push("금");
// circularQueue.print();
// circularQueue.push("토");
// circularQueue.print();
// circularQueue.push("일");
// circularQueue.print();
// circularQueue.push("월1");
// circularQueue.print();

// circularQueue.pop();
// circularQueue.print();
// circularQueue.push("월");
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();
// circularQueue.pop();
// circularQueue.print();

const size = 8;
const circularQueue = [];
let count = 0;
let front = 0;
let rear = 0;

function push(data) {
  if ((rear + 1) % size !== front) {
    rear = (rear + 1) % size;
    circularQueue[rear] = data;
    count += 1;
  }
}

function pop() {
  if (front !== rear) {
    front = (front + 1) % size;
    console.log(`결과 : ${circularQueue[front]}`);
    circularQueue[front] = null;
    count -= 1;
  }
}

function print() {
  console.log(`크기 : ${count}`);
  console.log(circularQueue);
}

function getSize() {
  return size;
}

function isEmpty() {
  return !size;
}

circularQueue.length = size;
circularQueue.fill(null);
