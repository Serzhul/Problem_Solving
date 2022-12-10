// 가장 최대인 정수: 정수들을 붙였을 때 최대가 되도록 하기

const N = 5;
const arr = [3, 30, 34, 5, 9];

// 두 수를 정렬하기 위해 비교하는 과정에서 두 수를 조인하고 둘 중에 더 큰 값이 있을 때, 앞으로 오도록

function selectionSort(array) {
  const len = array.length;

  for (let i = 0; i < len; i += 1) {
    let biggerIdx = i;
    let data1 = array[i];

    for (let j = i + 1; j < len; j += 1) {
      const data2 = array[j];
      const data12 = Number("" + data1 + data2);
      const data21 = Number("" + data2 + data1);

      if (data12 < data21) {
        biggerIdx = j;
        data1 = array[j];
      }
    }
    [array[i], array[biggerIdx]] = [array[biggerIdx], array[i]];
  }

  return arr;
}

const sortedArr = selectionSort(arr);

console.log(sortedArr.join(""));
