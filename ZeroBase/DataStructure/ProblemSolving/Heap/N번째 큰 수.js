// M개의 수가 있을 때 N번째로 큰 수를 찾기

// 1) N번째가 될 때까지

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

    if (child > count || heap[cur] < heap[child]) break;

    [heap[cur], heap[child]] = [heap[child], heap[cur]];

    cur = child;
  }

  return data;
}

const [M, N] = [25, 5];
// const arr = [1, 2, 3, 4, 5, 6, 7];
const arr = [
  12, 7, 9, 15, 5, 13, 8, 11, 19, 6, 21, 10, 26, 31, 16, 48, 14, 28, 35, 25, 52,
  20, 32, 41, 49,
];

arr.forEach((el) => {
  push(el);
  if (count > N) pop();
});

console.log(pop());
