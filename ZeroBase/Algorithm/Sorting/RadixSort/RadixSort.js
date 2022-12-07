class RadixSort {
  // 최대 자릿수 찾는 함수
  getMaxDigit(data) {
    let maxDigit = 0;
    data.map(
      (el) => (maxDigit = Math.max(maxDigit, el.toString().split("").length))
    );

    return maxDigit;
  }

  getDigit(num, i) {
    return Math.floor((Math.abs(num) / 10 ** i) % 10);
  }

  sort(data) {
    const maxDigit = this.getMaxDigit(data);

    for (let i = 0; i < maxDigit; i += 1) {
      // 정수 버킷 큐(0~9)
      const bucket = Array.from({ length: 10 }, () => []);

      const len = data.length;
      for (let j = 0; j < len; j += 1) {
        // 데이터들을 순회하면서 해당 값의 자릴 수를 가져와 버킷에 넣어줌
        const digit = this.getDigit(data[j], i);
        bucket[digit].push(data[j]);
      }

      // FlatMap을 통해 데이터를 정렬
      data = bucket.flatMap((el) => el);
    }

    return data;
  }
}

const radixSort = new RadixSort();
const arr = [3221, 1, 10, 960, 577, 9420, 7, 522];
console.log(arr);
const sortedArr = radixSort.sort(arr);
console.log(sortedArr);
