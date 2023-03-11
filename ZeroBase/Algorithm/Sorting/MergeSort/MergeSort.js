class MergeSort {
  sort(arr) {
    // 배열의 길이가 1이 될때까지 분할
    if (arr.length === 1) return arr;

    const mid = Math.ceil(arr.length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return this.merge(this.sort(left), this.sort(right));
  }

  static merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }

    return [...sortedArr, ...left, ...right];
  }
}

const mergeSort = new MergeSort();

const arr = [29, 10, 14, 37, 8, 27];
console.log(arr);
const sortedArr = mergeSort.sort(arr);
console.log(sortedArr);
