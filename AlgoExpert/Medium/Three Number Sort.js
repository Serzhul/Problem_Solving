const array = [1, 0, 0, -1, -1, 0, 1, 1];
const order = [0, 1, -1];

function threeNumberSort(array, order) {
  const firstValue = order[0];
  const thirdValue = order[2];

  let firstIdx = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === firstValue) {
      [array[firstIdx], array[idx]] = [array[idx], array[firstIdx]];
      firstIdx += 1;
    }
  }

  let thirdIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    if (array[idx] === thirdValue) {
      [array[thirdIdx], array[idx]] = [array[idx], array[thirdIdx]];
      thirdIdx -= 1;
    }
  }

  return array;
}

console.log(threeNumberSort(array, order));
