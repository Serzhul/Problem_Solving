const array = [1, 2];

function subarraySort(array) {
  let min = Infinity;
  let max = 0;

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      min = Math.min(min, array[i], array[i + 1]);
      max = Math.max(max, array[i], array[i + 1]);
    }
  }

  let start = -1;
  let end = -1;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > min) {
      start = i;
      break;
    }
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] < max) {
      end = i;
      break;
    }
  }

  return [start, end];
}

console.log(subarraySort(array));
