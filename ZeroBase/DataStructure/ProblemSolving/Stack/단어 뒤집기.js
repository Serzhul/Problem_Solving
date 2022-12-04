/* eslint-disable max-classes-per-file */
// 공백으로 이루어진 단어들의 리스트가 있을 때, 이 단어 리스트를 반대 순서로 뒤집어 보기

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.top === null) {
      this.top = newNode;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
  }

  print() {
    let cur = this.top;
    let ret = "";

    while (cur !== null) {
      ret += `${cur.data} `;
      cur = cur.next;
    }

    console.log(ret);
  }
}

const input = "JavaScript is the Programming Language for the Web";

const arr = input.split(" ");

const stack = new Stack();

arr.forEach((str) => stack.push(str));
stack.print();
