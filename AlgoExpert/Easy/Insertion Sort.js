const array = [8, 5, 2, 9, 5, 6, 3];

function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j -= 1;
    }
  }

  return array;
}

console.log(insertionSort(array));
