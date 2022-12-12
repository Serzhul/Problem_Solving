// 병합 정렬 원리
// i < j이고 arr[i] > arr[j] 인 것

const N = 8;
const tmp = Array.from({ length: N + 1 }, () => 0);
const arr = [6, 2, 4, 8, 7, 5, 1, 3];
let ans = 0;

function mergeSort(start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);

    let [left, right] = [start, mid + 1];
    let idx = start;

    while (left <= mid || right <= end) {
      if (right > end || (left <= mid && arr[left] < arr[right])) {
        tmp[idx] = arr[left];
        idx += 1;
        left += 1;
      } else {
        ans += mid - left + 1;
        tmp[idx] = arr[right];
        idx += 1;
        right += 1;
      }
    }

    for (let i = start; i <= end; i += 1) {
      arr[i] = tmp[i];
    }

    return arr;
  }
}

const sortedArr = mergeSort(0, arr.length - 1);

console.log(sortedArr);
console.log(ans);
