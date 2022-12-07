class InsertionSort {
  sort(data) {
    const len = data.length;

    for (let i = 1; i < len; i += 1) {
      const target = data[i];
      let targetIdx = i;

      // Target data보다 배열 내의 j번째 데이터가 크면 한칸씩 뒤로 밀기
      for (let j = i - 1; j >= 0 && data[j] > target; j -= 1) {
        targetIdx = j;
        data[j + 1] = data[j];
      }

      // 마지막으로 target Data가 들어가야 할 위치에 데이터를 삽입
      data[targetIdx] = target;
    }

    return data;
  }
}

const insertionSort = new InsertionSort();
const arr = [28, 10, 14, 37, 8, 27];
const sortedArr = insertionSort.sort(arr);
console.log(sortedArr);
