class MaxHeap {
  constructor(size) {
    this.size = size;
    this.heap = Array.from({ length: size }, () => 0);
    this.count = 0;
  }

  push(data) {
    this.count += 1;
    this.heap[this.count] = data;

    let cur = this.count;
    let par = Math.floor(cur / 2); // 현재 노드 인덱스의 * 2는 왼쪽 자식 노드임

    // 현재 위치보다 부모가 더 작으면 반복해서 SWAP
    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt === 0) {
      return null;
    }

    const data = this.heap[1];

    // 힙의 가장 마지막 값을 가져온다.
    this.heap[1] = this.heap[this.count];
    this.count -= 1;

    let cur = 1;
    let child;

    while (true) {
      child = cur * 2;

      // 현재 자식 중 더 큰 값으로 이동

      if (child < this.count && this.heap[child] < this.heap[child + 1]) {
        child += 1;
      }

      // 더 이상 swap을 하지 않아도 되는 경우
      if (child > this.count || this.heap[cur] > this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  print() {
    console.log(`=== Max Heap === `);
    console.log(this.heap);
  }
}

const maxHeap = new MaxHeap(11);

maxHeap.push(2);
maxHeap.print();

maxHeap.push(1);
maxHeap.print();

maxHeap.push(4);
maxHeap.print();

maxHeap.push(3);
maxHeap.print();

console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
