/* eslint-disable max-classes-per-file */
class MaxHeapSort {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log(`=== heap ===`);
    console.log(this.heap);
  }

  push(data) {
    // 1번 인덱스
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt === 0) return null;

    const data = this.heap[1];

    this.heap[1] = this.heap[this.cnt];
    this.cnt -= 1;

    let cur = 1;
    let child;

    while (true) {
      child = cur * 2;

      // 자식 노드들 중 오른쪽 같이 더 크면 child + 1을 해줌
      if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
        child += 1;
      }

      // 더 이상 swap하지 않아도 되는 경우
      // 1. 힙의 사이즈를 초과하거나
      // 2. 부모 노드 값이 자식 노드값보다 클 경우(최소힙일 때는 반대)
      if (child > this.cnt || this.heap[cur] > this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}

const maxHeapSort = new MaxHeapSort(10);

const arr = [29, 10, 14, 37, 8, 27];
arr.forEach((el) => maxHeapSort.push(el));
maxHeapSort.print();

arr.forEach((el) => console.log(maxHeapSort.pop()));
