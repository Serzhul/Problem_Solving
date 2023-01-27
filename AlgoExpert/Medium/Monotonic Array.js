const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

function isMonotonic(array) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) isIncreasing = false;
    if (array[i] > array[i - 1]) isDecreasing = false;
  }

  return isIncreasing || isDecreasing;
}

console.log(isMonotonic(array));
