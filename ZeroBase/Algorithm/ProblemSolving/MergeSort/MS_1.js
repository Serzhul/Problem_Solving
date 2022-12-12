// N개의 수가 주어졌을 때, 내림 차순으로 정렬ㄴ

function merge(left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function sort(data) {
  if (data.length === 1) return data;

  const mid = Math.ceil(data.length / 2);

  const left = data.slice(0, mid);
  const right = data.slice(mid);

  return merge(sort(left), sort(right));
}

const N = 5;
const arr = [1, 2, 3, 4, 5];
const sortedArr = sort(arr);

console.log(sortedArr, "sortedArr");
