// N 개의 수가 주어졌을 때, 오름 차순으로 정렬하기
// (1<= N <= 1,000 수의 범위는 -1,000,000 ~ 1,000,000)

function advancedBubbleSort(arr) {
  const len = arr.length;
  let isSwap = false;

  for (let i = 0; i < len; i += 1) {
    isSwap = false;

    for (let j = 0; j < len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }

    if (!isSwap) {
      break;
    }
  }

  return arr;
}

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const N = 7;
const input = [-500000, 3000, 40000, 1000000, 0, 500000, -100000];

// const sortedArr = bubbleSort(input);
const sortedArr = advancedBubbleSort(input);

console.log(sortedArr);
