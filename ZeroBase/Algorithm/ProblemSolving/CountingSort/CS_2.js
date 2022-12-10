// K만큼 다른 수
// N개의 수와 K가 주어질 때, 아래 조건에 맞는 (i,j) 쌍 구하기
// i < j 이면서 |arr[i]-arr[j]| == k를 만족시키는 모든 쌍
// (1 <= N <= 10,000,000, 1<= K < 100, 1 <= arr[i] <= 100)

const N = 4;
const K = 1;
const arr = [1, 2, 2, 1];

// const [N, K] = [5, 2];
// const arr = [3, 2, 1, 5, 4];

let maxVal = Math.max(...arr);

const countArr = Array.from({ length: maxVal + 1 }, () => 0);
arr.forEach((el) => {
  countArr[el] += 1;
});

console.log(countArr);

let ret = 0;

// i의 i+K에 위치한 값들로 만들 수 있는 모든 쌍 =>countArr[i] * countArr[i+K]
for (let i = 0; i + K <= maxVal; i += 1) {
  console.log(`i: ${i}, i+k: ${i + K}`);
  ret += countArr[i] * countArr[i + K];
  console.log(countArr[i], countArr[i + K]);
}

console.log(ret);
