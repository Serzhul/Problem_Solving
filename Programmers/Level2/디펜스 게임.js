const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];

class MinHeap {
  constructor(size) {
    this.size = size;
    this.heap = Array.from({ length: size }, () => 0);
    this.count = 0;
  }

  push(data) {
    this.count += 1;
    this.heap[this.count] = data;

    let cur = this.count;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] < this.heap[par]) {
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

      // 현재 자식 중 더 작은 값으로 이동

      if (child < this.count && this.heap[child] > this.heap[child + 1]) {
        child += 1;
      }

      // 더 이상 swap을 하지 않아도 되는 경우
      if (child > this.count || this.heap[cur] < this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  getMin() {
    return this.heap[1];
  }
}

function solution(n, k, enemy) {
  const heap = new MinHeap();
  let answer = 0;
  let soldiers = n;

  for (let i = 0; i < enemy.length; i += 1) {
    if (heap.count < k) {
      heap.push(enemy[i]);
      answer += 1;
    } else {
      const min = heap.getMin();

      if (enemy[i] > min) {
        soldiers -= min;
        heap.pop();
        heap.push(enemy[i]);
      } else {
        soldiers -= enemy[i];
      }

      if (soldiers >= 0) answer += 1;
    }
  }

  return answer;
}

console.log(solution(n, k, enemy));
