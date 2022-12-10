// N개의 수가 주어졌을 때, 오름차순으로 정렬해보자.
// (1<=N<= 10000000)
// 계수 정렬의 단점은 공간 복잡도

const arr = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

let maxVal = Math.max(...arr);

const countArr = Array.from({ length: maxVal + 1 }, () => 0);
console.log(countArr);

arr.forEach((el) => {
  countArr[el] += 1;
});

const sortedArr = [];

countArr.forEach((el, idx) => {
  while (el > 0) {
    sortedArr.push(idx);
    el -= 1;
  }
});

console.log(sortedArr);
