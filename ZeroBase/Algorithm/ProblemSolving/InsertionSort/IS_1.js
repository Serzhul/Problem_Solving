// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하라

const N = 7;
const arr = [-500000, 3000, 4000, 100000, 0, 50000, -100000];

function insertionSort(array) {
  const len = array.length;

  for (let i = 1; i < len; i += 1) {
    const target = array[i];
    let targetIdx = i;

    for (let j = i - 1; j >= 0 && array[j] > target; j -= 1) {
      targetIdx = j;
      array[j + 1] = array[j];
    }

    array[targetIdx] = target;
  }

  return array;
}

console.log(arr);
const sortedArr = insertionSort(arr);

console.log(sortedArr);
