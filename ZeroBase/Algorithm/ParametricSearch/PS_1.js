// 고깃집에 서로 다른 무게를 가진 N 개의 고기가 나열되어 있을 때, Kg를 넘지 않으면서 가장 최대인 값

function parametricSearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return mid;
    if (array[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return start - 1;
}

const N = 16;
const targetVal = 200;

const arr = [
  10, 30, 50, 70, 90, 150, 170, 210, 290, 310, 370, 390, 430, 450, 470, 500,
];

const sorted = arr.sort((a, b) => a - b);
const ret = parametricSearch(arr, targetVal);

console.log(sorted[ret], ret);
