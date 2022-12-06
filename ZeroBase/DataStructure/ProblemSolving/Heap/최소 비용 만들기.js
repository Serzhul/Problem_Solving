// N개의 수가 주어질 때, 두개씩 합쳐서 1개로 만들기까지 드는 최소 비용
const MAX = 101;
const heap = Array.from({ length: MAX }, () => 0);
let count = 0;

function push(data) {
  count += 1;
  heap[count] = data;

  let cur = count;
  let parent = Math.floor(cur / 2);

  while (cur > 1 && heap[cur] < heap[parent]) {
    [heap[cur], heap[parent]] = [heap[parent], heap[cur]];
    cur = parent;
    parent = Math.floor(cur / 2);
  }
}

function pop() {
  if (count === 0) return null;

  const data = heap[1];
  heap[1] = heap[count];
  count -= 1;

  let cur = 1;
  let child;

  while (true) {
    child = cur * 2;
    if (child + 1 <= count && heap[child] > heap[child + 1]) {
      child += 1;
    }

    // 최소 힙의 경우 부모가 자식보다 작거나 같아야 한다.
    if (child > count || heap[cur] < heap[child]) {
      break;
    }

    [heap[cur], heap[child]] = [heap[child], heap[cur]];

    cur = child;
  }

  return data;
}

function getSize() {
  return count;
}

const N = 4;
const arr = [30, 40, 50, 100];
// const arr = [120, 40, 100, 30];

arr.forEach((el) => push(el));

let ret = 0;

while (getSize() !== 1) {
  const first = pop();
  const second = pop();

  const sum = first + second;

  ret += sum;
  console.log(`first: ${first} second: ${second} sum: ${sum} ret: ${ret}`);
  push(sum);
}
