// N개의 원소가 주어지고 원소에 값 M이 몇개가 존재하는지 확인

const N = 10;
const array = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3];
const sorted = array.sort((a, b) => a - b);

// LIS 알고리즘

// target이 배열 내에서 처음으로 나타나는 위치
function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let pos = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      pos = mid;

      end = mid - 1; // 추가로 왼쪽 구역을 탐색하여 target을 확인
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return pos;
}

// target이 배열 내에서 마지막으로 나타나는 위치
function upperBound(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let pos = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      pos = mid; // 현재 위치가 target이 나온 가장 오른쪽 위치라 가정
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return pos;
}

console.log(sorted);
const lowerPos = lowerBound(sorted, 10);

const upperPos = upperBound(sorted, 10);

console.log(upperPos - lowerPos + 1);
