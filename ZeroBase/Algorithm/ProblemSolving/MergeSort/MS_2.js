// 배열 병합
// 정렬되지 않은 N개의 수로 이루어진 수열 A,
// M개의 수로 이루어진 수열 B가 있을 때, A와 B를 정렬된 수열로 합치기

function merge(left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) sortedArr.push(left.shift());
    else sortedArr.push(right.shift());
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

const [N, M] = [6, 3];

const arr1 = [7, 2, 3, 4, 2, 1];
const arr2 = [1, 5, 8];

const sortedA = sort(arr1);
const sortedB = sort(arr2);

console.log(sort([...sortedB, ...sortedA]));
