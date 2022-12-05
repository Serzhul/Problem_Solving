/* eslint-disable max-classes-per-file */
// N자리 숫자가 주어질 때, K개를 지워 얻을 수 있는 가장 큰 수 구하기

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.top === null) {
      this.top = newNode;
      this.size += 1;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.size += 1;
  }

  getTop() {
    if (this.isEmpty()) return null;

    return this.top.data;
  }

  pop() {
    const topData = this.getTop();

    this.top = this.top.next;
    this.size -= 1;

    return topData;
  }

  print(isReverseRequired = false) {
    let cur = this.top;
    let ret = "";

    while (cur !== null) {
      ret += cur.data;
      cur = cur.next;
    }

    if (isReverseRequired) {
      console.log(ret.split("").reverse().join(""));
      return;
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

const input = "5477292842"; // 4321
let K = 4; // 2

const stack = new Stack();

[...input].forEach((num) => {
  if (stack.isEmpty()) {
    stack.push(num);
  } else {
    while (!stack.isEmpty() && num > stack.getTop() && K > 0) {
      stack.pop();
      K -= 1;
    }
    stack.push(num);
  }
});

while (K > 0) {
  stack.pop();
  K -= 1;
}

stack.print(true);
