function qsort(arr, start, end) {
  if (start === end) return;
  let left = start;
  let right = end;

  const pivot = arr[left];

  while (left < right) {
    while (arr[right] <= pivot && right > left) {
      right -= 1;
    }

    arr[left] = arr[right];

    while (arr[left] >= pivot && left < right) {
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

const [N, K] = [25, 5];

const arr = [
  12, 7, 9, 15, 5, 13, 8, 11, 19, 6, 21, 10, 26, 31, 16, 48, 14, 28, 35, 25, 52,
  20, 32, 41, 49,
];

qsort(arr, 0, N - 1);
console.log(arr[K - 1]);
