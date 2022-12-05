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
    console.log(this.dequeue);
  }
}

const arr = [3, -2, -4, -9, 0, 3, 7, 13, 8, -3];
const K = 3;

const dequeue = new Dequeue();

arr.forEach((el) => dequeue.pushRear(el));

let maxVal = 0;

while (dequeue.getSize() >= K) {
  const val1 = dequeue.popFront();
  const val2 = dequeue.front();

  maxVal = Math.max(maxVal, val1 + val2);
}

console.log(maxVal);
