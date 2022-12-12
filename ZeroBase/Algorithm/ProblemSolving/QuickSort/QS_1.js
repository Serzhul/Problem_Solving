// 오름차순 정렬
function qsort(arr, start, end) {
  if (start === end) return;

  let left = start;
  let right = end;

  const pivot = arr[left];

  while (left < right) {
    while (arr[right] >= pivot && right > left) {
      right -= 1;
    }

    arr[left] = arr[right];

    while (arr[left] <= pivot && left < right) {
      left += 1;
    }

    arr[right] = arr[left];

    if (left === right) {
      arr[left] = pivot;
      qsort(arr, start, right - 1);
      qsort(arr, left + 1, end);
    }
  }
}

const N = 10;
const arr = [10, 2, 4, 15, -1, 7, 3, 6, 30, 21];

console.log("정렬 전 : ", arr);
qsort(arr, 0, arr.length - 1);
console.log("정렬 후 : ", arr);
