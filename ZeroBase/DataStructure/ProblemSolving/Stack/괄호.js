/* eslint-disable max-classes-per-file */
// '(', ')'로 이뤄진 문자열이 정상적인 괄호 구조인지 판단하기
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

    if (this.isEmpty()) {
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

  print() {
    let cur = this.top;

    let ret = "";
    while (cur !== null) {
      ret += cur.data;
      cur = cur.next;
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

const arr = "(()(()))(()))";
const stack = new Stack();

let isNormal = true;

[...arr].forEach((bracket) => {
  if (stack.isEmpty()) {
    if (bracket === ")") {
      isNormal = false;
    } else {
      stack.push(bracket);
    }

    return;
  }

  if (bracket === ")") {
    if (stack.getTop() === "(") {
      stack.pop();
    } else {
      isNormal = false;
    }
  } else {
    stack.push(bracket);
  }
});

if (!stack.isEmpty()) isNormal = false;

console.log(isNormal ? "O" : "X");
