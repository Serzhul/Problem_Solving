// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하라

const arr = [-500000, 3000, 40000, 1000000, 0, 500000, -1000000];

function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i += 1) {
    let minIdx = i;

    // 맨 앞에서부터 정렬
    for (let j = i + 1; j < len; j += 1) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

const sortedArr = selectionSort(arr);

console.log(sortedArr);
