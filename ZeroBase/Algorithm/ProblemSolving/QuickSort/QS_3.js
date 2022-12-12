// 절댓값 정렬

function qsort(arr, start, end) {
  if (start === end) return;

  let left = start;
  let right = end;
  const pivot = arr[left];

  while (left < right) {
    while (Math.abs(arr[right]) >= Math.abs(pivot) && right > left) {
      right -= 1;
    }

    arr[left] = arr[right];

    while (Math.abs(arr[left]) <= Math.abs(pivot) && left < right) {
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

const arr = [2, 3, -4, 4, -5, 7, 1, -1];

console.log("정렬 전:", arr);
qsort(arr, 0, arr.length - 1);
console.log("정렬 전:", arr);
