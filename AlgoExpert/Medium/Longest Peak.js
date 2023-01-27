// const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

const array = [
  1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5,
  0, -1, -1,
];

function longestPeak(array) {
  let max = 0;
  // 1: find Peaks
  // 특정 element의 left와 right 값을 비교해서 둘 다 보다 크면 Peak

  for (let i = 1; i < array.length; i += 1) {
    const left = i - 1;
    const right = i + 1;
    const cur = array[i];

    if (cur > array[left] && cur > array[right]) {
      let leftCount = 1;
      let rightCount = 1;

      for (let j = left; j > 0; j -= 1) {
        if (array[j] > array[j - 1]) {
          leftCount += 1;
        } else break;
      }

      for (let k = right; k < array.length; k += 1) {
        if (array[k] > array[k + 1]) {
          rightCount += 1;
        } else break;
      }

      max = Math.max(max, leftCount + rightCount + 1);
    }
  }

  return max;
}

console.log(longestPeak(array));
