class SelectionSort {
  sort(data) {
    const len = data.length;

    for (let i = 0; i < len - 1; i += 1) {
      let minIdx = i;

      for (let j = i + 1; j < len; j += 1) {
        if (data[minIdx] > data[j]) minIdx = j;
      }
      // 최솟값이 있는 Index를 찾으면 minIdx와 현재 위치 i를 swap
      [data[i], data[minIdx]] = [data[minIdx], data[i]];
    }

    return data;
  }
}

const selectionSort = new SelectionSort();
const arr = [28, 10, 14, 37, 8, 27];
const sortedArr = selectionSort.sort(arr);

console.log(sortedArr);
