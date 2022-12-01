import Node from "./Node.js";

// class Dequeue {
//   constructor() {
//     this.front = null;
//     this.rear = null;

//     this.size = 0;
//   }

//   pushFront(data) {
//     const newNode = new Node(data, null, null);

//     if (this.isEmpty()) {
//       this.front = newNode;
//       this.rear = newNode;

//       this.size += 1;

//       return;
//     }

//     this.front.prev = newNode;
//     newNode.next = this.front;
//     this.front = newNode;
//     this.size += 1;
//   }

//   pushRear(data) {
//     const newNode = new Node(data, null, null);

//     if (this.isEmpty()) {
//       this.front = newNode;

//       this.rear = newNode;
//       this.size += 1;
//       return;
//     }

//     this.rear.next = newNode;
//     newNode.prev = this.rear;
//     this.rear = newNode;
//     this.size += 1;
//   }

//   popFront() {
//     const cur = this.front;

//     if (this.isEmpty()) {
//       console.log("덱이 비었습니다.");
//       return;
//     }

//     if (this.getSize() === 1) {
//       this.front = null;
//       this.rear = null;
//       this.size -= 1;
//       console.log("pop된 데이터 : ", cur.data);
//       return;
//     }

//     this.front = this.front.next;
//     this.front.prev = null;
//     this.size -= 1;

//     console.log("pop된 데이터 : ", cur.data);
//   }

//   popRear() {
//     const cur = this.rear;

//     if (this.isEmpty()) {
//       console.log("덱이 비었습니다.");
//       return;
//     }

//     if (this.getSize() === 1) {
//       this.front = null;
//       this.rear = null;
//       this.size -= 1;
//       console.log("pop된 데이터 : ", cur.data);

//       return;
//     }

//     this.rear = this.rear.prev;
//     this.rear.next = null;
//     this.size -= 1;

//     console.log("pop된 데이터 : ", cur.data);
//   }

//   print() {
//     let cur = this.front;

//     console.log(`길이 : ${this.getSize()}`);

//     while (cur !== null) {
//       console.log(cur.data);
//       cur = cur.next;
//     }
//   }

//   getSize() {
//     return this.size;
//   }

//   isEmpty() {
//     return !this.size;
//   }
// }

// const dequeue = new Dequeue();

// dequeue.pushFront("월");
// dequeue.print();

let dequeue = [];

function pushFront(data) {
  dequeue.unshift(data);
}

function pushRear(data) {
  dequeue.push(data);
}

function popFront() {
  const ret = dequeue.shift();
  console.log("popFront: ", ret);
}

function popRear() {
  dequeue.pop();
}

function getSize() {
  return dequeue.length;
}

function isEmpty() {
  return !dequeue.length;
}

function print() {
  console.log("크기 : ", getSize());
  console.log(dequeue);
}

pushFront("월");
print();
pushFront("수");
print();
pushRear("금");
print();
