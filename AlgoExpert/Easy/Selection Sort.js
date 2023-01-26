const array = [8, 5, 2, 9, 5, 6, 3];

function selectionSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i += 1) {
    let minIdx = i;

    for (let j = i + 1; j < len; j += 1) {
      if (array[minIdx] > array[j]) minIdx = j;
    }

    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }

  return array;
}

console.log(selectionSort(array));
