class AdvancedBubbleSort {
  sort(data) {
    const len = data.length;

    // 버블 정렬에서 반복문 내에서 Swap이 발생하지 않는다면
    // 모두 정렬된 것이나 마찬가지므로 더 이상 버블소트를 진행하지 않아도 괜찮음
    let isSwap = false;

    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len - 1; j += 1) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
          isSwap = true;
        }
      }
      if (!isSwap) break;
    }

    return data;
  }
}

// class BubbleSort {
//   sort(data) {
//     const len = data.length;
//     for (let i = 0; i < len; i += 1) {
//       for (let j = 0; j < len - 1; j += 1) {
//         if (data[j] > data[j + 1]) {
//           [data[j], data[j + 1]] = [data[j + 1], data[j]];
//         }
//       }
//     }

//     return data;
//   }
// }

const advancedBubbleSort = new AdvancedBubbleSort();
const arr = [28, 10, 14, 37, 8, 27];
const sortedArr = advancedBubbleSort.sort(arr);

console.log(sortedArr);
