const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33;

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;

    if (array[mid] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return -1;
}

console.log(binarySearch(array, target));
