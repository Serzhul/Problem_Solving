// 소문자 알파벳으로 이루어진 N개의 단어가 들어올 때, 아래의 조건에 따라 정렬
// 길이가 짧은 것부터, 길이가 같으면 사전 순으로

const words = [
  "bb",
  "ab",
  "but",
  "i",
  "wont",
  "hesitate",
  "no",
  "more",
  "it",
  "cannot",
  "wait",
];

const convertList = [];

const wordMap = {};

words.forEach((word) => {
  let hash = "";

  word.split("").forEach((char) => {
    const num = char.charCodeAt() - "a".charCodeAt() + 1;
    hash += num;
  });

  hash = Number(hash);
  wordMap[hash] = word;
  convertList.push(hash);
});

function bubbleSort(arr) {
  const len = arr.length;
  let isSwap = false;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }

    if (!isSwap) break;
  }

  return arr;
}

const sortedArr = bubbleSort(convertList).map((hash) => wordMap[hash]);

console.log(sortedArr);
