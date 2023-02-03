// class MinHeap {
//   constructor(size) {
//     this.size = size;
//     this.heap = Array.from({ length: size }, () => 0);
//     this.count = 0;
//   }

//   push(data) {
//     this.count += 1;
//     this.heap[this.count] = data; // 데이터를 삽입

//     let cur = this.count;
//     let par = Math.floor(cur / 2); // 부모 위치

//     // 현재 값이 부모보다 작은 경우 => 데이터를 SWAP을 통해 shiftup 해줘야함
//     while (cur > 1 && this.heap[cur] < this.heap[par]) {
//       [this.heap[par], this.heap[cur]] = [this.heap[cur], this.heap[par]];

//       cur = par;
//       par = Math.floor(cur / 2); // idx 갱신
//     }
//   }

//   pop() {
//     if (this.cnt === 0) return null;

//     const data = this.heap[1];

//     // 힙의 가장 마지막 값을 가져옴
//     this.heap[1] = this.heap[this.count];
//     this.count -= 1;

//     let cur = 1;
//     let child;

//     while (true) {
//       child = cur * 2; // 자식 노드 위치

//       if (child < this.count && this.heap[cur] > this.heap[child + 1]) {
//         child += 1;
//       }

//       // 더 이상 swap을 하지 않아도 되는 경우
//       if (child > this.count || this.heap[cur] < this.heap[child]) break;

//       [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

//       cur = child;
//     }

//     return data;
//   }
// }

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let curIdx = firstParentIdx; curIdx >= 0; curIdx -= 1) {
      this.siftDown(curIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(curIdx, endIdx, heap) {
    let childOneIdx = curIdx * 2 + 1;

    while (childOneIdx <= endIdx) {
      const childTwoIdx = curIdx * 2 + 2 <= endIdx ? curIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else idxToSwap = childOneIdx;

      if (heap[idxToSwap] < heap[curIdx]) {
        this.swap(curIdx, idxToSwap, heap);
        curIdx = idxToSwap;
        childOneIdx = curIdx * 2 + 1;
      } else return;
    }
  }

  siftUp(curIdx, heap) {
    let par = Math.floor((curIdx - 1) / 2);
    while (curIdx > 0 && heap[curIdx] < heap[par]) {
      this.swap(curIdx, par, heap);
      curIdx = par;
      par = Math.floor((curIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);

    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
