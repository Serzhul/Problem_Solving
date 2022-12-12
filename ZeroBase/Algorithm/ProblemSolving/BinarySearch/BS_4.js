// 건축 시간
// N개의 건축 시간 및 비용을 제안
// 남은 시간이 K시간 밖에 남지 않음
// 시공사가 가장 많이 돈을 많이 버는 금액이 얼마인지

// const [N, K] = [9, 20];
// const arr = [4, 9, 7, 10, 15, 26, 34, 18, 22];

const [N, K] = [9, 20];
const arr = [4, 9, 7, 10, 21, 20, 19, 18, 22];

arr.sort((a, b) => a - b);

let start = 0;
let end = arr.length - 1;

let ans = 0;

while (start <= end) {
  // K 이하 시간을 만족하면서 가장 큰값
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] <= K) {
    start = mid + 1;
    ans = Math.max(ans, arr[mid]);
  } else {
    end = mid - 1;
  }
}

console.log(ans);
