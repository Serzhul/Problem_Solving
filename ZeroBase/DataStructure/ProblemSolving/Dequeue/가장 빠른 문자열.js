// N개의 정수와 연속적인 범위를 나타내는 K가 주어질 때, 합의 최대가 되는 값을 출력하자.

class Dequeue {
  constructor() {
    this.dequeue = [];
  }

  pushFront(data) {
    this.dequeue.unshift(data);
  }

  popFront() {
    if (this.isEmpty()) return null;
    return this.dequeue.shift();
  }

  front() {
    if (this.isEmpty()) return null;

    return this.dequeue[0];
  }

  pushRear(data) {
    this.dequeue.push(data);
  }

  popRear() {
    if (this.isEmpty()) return null;
    return this.dequeue.pop();
  }

  rear() {
    if (this.isEmpty()) return null;
    return this.dequeue[this.getSize() - 1];
  }

  getSize() {
    return this.dequeue.length;
  }

  isEmpty() {
    return !this.getSize();
  }

  print() {
    console.log(this.dequeue.join(""));
  }
}

const arr = "BACABAC";

const dequeue = new Dequeue();

[...arr].forEach((char) => {
  if (dequeue.isEmpty()) {
    dequeue.pushRear(char);
  } else if (dequeue.rear() >= char && dequeue.front() >= char) {
    dequeue.pushFront(char);
  } else dequeue.pushRear(char);
});

dequeue.print();
