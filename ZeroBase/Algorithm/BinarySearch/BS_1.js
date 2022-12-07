// 찾아야 할 값 target과 정렬된 배열이 주어질 때, 배열에서 위치하는 idx

// const target = 5; // 2
const target = 7; // 4
// const target = 2; // 1
// const target = 0; // 0

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    console.log(`start : ${start} mid : ${mid} end : ${end}`);

    if (arr[mid] === val) return mid;

    if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

const arr = [1, 3, 5, 6];
const idx = binarySearch(arr, target);
console.log(idx);
