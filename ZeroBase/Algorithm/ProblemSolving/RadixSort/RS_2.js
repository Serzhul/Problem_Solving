// 최대 차이
// N개의 수가 주어질 때, 정렬한 후, 인접한 두 수의 최대 차이를 구해보자.
// 3,6,9,1이면 -> 1,3,6,9로 정렬한 후 최대 차이는 3,6 혹은 6,9인 3이 된다.

const N = 4;
const input = [3, 6, 9, 1];

function getMaxDigit(arr) {
  let maxDigit = 0;

  arr.forEach((el) => {
    maxDigit = Math.max(maxDigit, String(el).length);
  });

  return maxDigit;
}

function getDigit(num, radix) {
  return Math.floor((Math.abs(num) / 10 ** radix) % 10);
}

function radixSort(array) {
  const maxDigit = getMaxDigit(array);

  for (let i = 0; i < maxDigit; i += 1) {
    const bucket = Array.from({ length: 10 }, () => []);

    const len = array.length;

    // 데이터를 순회하며 해당 자릿수의 값을 가져와서 bucket에 넣는다.
    for (let j = 0; j < len; j += 1) {
      const digit = getDigit(array[j], i);
      bucket[digit].push(array[j]);
    }

    array = bucket.flatMap((el) => el);
  }

  return array;
}

const sortedArr = radixSort(input);

let maxDiff = 0;
const len = sortedArr.length;
for (let i = 1; i < len; i += 1) {
  maxDiff = Math.max(sortedArr[i] - sortedArr[i - 1], maxDiff);
}
console.log(sortedArr);
console.log(maxDiff);
