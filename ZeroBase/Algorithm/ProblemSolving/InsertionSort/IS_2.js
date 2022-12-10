// 삽입 정렬 횟수 세기
// 삽입 정렬동안 얼마나 이동했는지 계산

const arr = [-1, 1, 0];
// const arr = [20, 40, 30, 10];
let insertCount = 0;

function insertionSort(array) {
  const len = array.length;

  for (let i = 1; i < len; i += 1) {
    const target = array[i];
    let targetIdx = i;

    for (let j = i - 1; j >= 0 && array[j] > target; j -= 1) {
      insertCount += 1;

      targetIdx = j;
      array[j + 1] = array[j];
    }

    array[targetIdx] = target;
  }

  return arr;
}

const sortedArr = insertionSort(arr);

console.log(sortedArr);
console.log(insertCount);
