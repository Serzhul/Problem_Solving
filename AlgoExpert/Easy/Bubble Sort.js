const array = [8, 5, 2, 9, 5, 6, 3];

// Solution1 : BubbleSort 전체 순회
// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = i + 1; j < array.length; j += 1) {
//       if (array[i] > array[j]) {
//         let temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//   }

//   return array;
// }

// Solution2 : BubbleSort 분기 체크
function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = false;
      }
    }

    counter += 1;
  }

  return array;
}

console.log(bubbleSort(array));
