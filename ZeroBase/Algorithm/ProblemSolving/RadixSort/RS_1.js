// N개의 숫자 정렬하기
// 기수 정렬의 시간 복잡도는 O(NK)

// 1) 해당 배열의 수들 중 가장 최대 자릿수를 구한다.

// 2) 최대자릿수만큼 반복하며 다음과 같이 진행한다.

// 	2-1) 길이 10의 버킷을 생성한다. (각 자리수별 정수인 0~9 까지 넣기 위함)
// 	2-2) 배열을 순회하면서, 각 데이터의 자릿수에 해당하는 값을 구한다.
// 	2-3) 버킷에서 해당 자릿수의 값을 인덱스로 찾아서 해당 원본값을 push한다.
// 	2-4) 원본 배열을 bucket 데이터의 flatMap으로 갱신한다.

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

const arr = [512, 2, 333, 123, 454, 2, 3, 512, 12212, 7];
// const arr = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

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
const sortedArr = radixSort(arr);

console.log(sortedArr);
