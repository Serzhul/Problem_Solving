// 다음과 같은 소스를 실행시켰을 때, 어떤 값이 출력되는지 구해보자.

const N = 5;
const arr = [10, 1, 5, 2, 3];
const newArr = arr.map((el, idx) => [el, idx]);

console.log(newArr);
newArr.sort((a, b) => a[0] - b[0]);
let change = 0;

for (let i = 0; i < N; i += 1) {
  change = Math.max(change, newArr[i][1] - i + 1);
}

console.log(change);
