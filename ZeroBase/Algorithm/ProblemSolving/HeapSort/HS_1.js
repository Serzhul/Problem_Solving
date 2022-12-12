// N개의 수가 주어졌을 때, 오름차순으로 정렬하기

const arr = [10, 2, 4, 15, -1, 7, 3, 6, 30, 21];
const N = 10;

class MinHeap {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.cnt += 1;
    this.heap[this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] < this.heap[par]) {
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
      cur = child * 2;

      if (child < this.cnt && this.heap[child] > this.heap[child + 1]) {
        child += 1;
      }

      if (child > this.cnt || this.heap[cur] < this.heap[child]) break;

      cur = child;
    }

    return data;
  }
}

// class MinHeap {
//   constructor(size) {
//     this.heap = Array.from({ length: size }, () => 0);
//     this.cnt = 0;
//   }

//   push(data) {
//     this.cnt += 1;
//     this.heap[this.cnt] = data;

//     let cur = this.cnt;
//     let par = Math.floor(cur / 2);

//     while (cur > 1 && this.heap[cur] < this.heap[par]) {
//       [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

//       cur = par;
//       par = Math.floor(cur / 2);
//     }

//     console.log(this.heap, "heap");
//   }

//   top() {
//     if (this.cnt === 0) return null;

//     const data = this.heap[1];
//     return data;
//   }

//   pop() {
//     if (this.cnt === 0) return null;

//     const data = this.heap[1];
//     this.heap[1] = this.heap[this.cnt];
//     this.cnt -= 1;

//     // console.log("data:", data);

//     let cur = 1;
//     let child;

//     while (true) {
//       child = cur * 2;

//       if (child < this.cnt && this.heap[child] > this.heap[child + 1]) {
//         child += 1;
//       }

//       if (child > this.cnt || this.heap[cur] < this.heap[child]) break;

//       [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

//       cur = child;
//     }

//     return data;
//   }

//   size() {
//     return this.cnt;
//   }

//   empty() {
//     return !this.cnt;
//   }
// }

const minHeap = new MinHeap(N + 1);
arr.forEach((el) => minHeap.push(el));

while (!minHeap.empty()) {
  console.log(minHeap.pop());
}
