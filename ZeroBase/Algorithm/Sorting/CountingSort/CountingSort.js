class CountingSort {
  sort(data) {
    const max = Math.max(...data);

    const countArr = Array.from({ length: max + 1 }, () => 0);

    const len = data.length;

    for (let i = 0; i < len; i += 1) {
      countArr[data[i]] += 1;
    }

    let idx = 0;
    for (let i = 0; i < len; i += 1) {
      if (countArr[i] > 0) {
        for (let j = 0; j < countArr[i]; j += 1) {
          data[idx] = i;
          idx += 1;
        }
      }
    }

    return data;
  }
}

const countingSort = new CountingSort();
const arr = [1, 2, 2, 3, 2, 8, 7, 9, 7, 9];
const sortedArr = countingSort.sort(arr);
console.log(sortedArr);
