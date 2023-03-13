function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 5));

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

console.log(lowerBound([1, 3, 5, 7, 9, 11, 13, 15], 10, 0, 9));

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}
