// 빈도 정렬 => 각 자릿수를 내림차순으로 정렬하기

const MAX = 101;
const heap = Array.from({ length: 100 }, () => 0);
let count = 0;

function print() {
  console.log("=== heap ===");
  console.log(heap);
}

function push(data) {
  // 현재노드 * 2 => 왼쪽 노드
  // 현재도느 * 2 + 1 => 오른쪽 노드

  count += 1;
  heap[count] = data;

  let cur = count;
  let parent = Math.floor(cur / 2);

  while (cur > 1 && heap[cur] > heap[parent]) {
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
    if (child < count && heap[child] < heap[child + 1]) {
      child += 1;
    }

    if (child > count || heap[cur] > heap[child]) break;

    [heap[cur], heap[child]] = [heap[child], heap[cur]];

    cur = child;
  }

  return data;
}

// let arr = "999898";
// let arr = "2143";
let arr = "500713009";

arr.split("").forEach((el) => {
  push(Number(el));
});

arr = [];

while (count) {
  arr.push(pop());
}

arr = arr.join("");
console.log(arr);
