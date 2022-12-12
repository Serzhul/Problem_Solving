// 건강 검진
// 직원 N명, 의사 M명 => 각 의사는 건강 검진 시간이 다름
// 한 검진실당 한 명 씩 검진이 가능하다.
// 모든 사람이 검진을 받는데 걸리는 시간을 최소로 만들기

// const [N, M] = [6, 2];
// const times = [7, 10];

const [N, M] = [7, 2];
const times = [10, 10];

let ans = Infinity;
let [start, end] = [0, 100000000 * 10000];

while (start <= end) {
  // mid 시간 내에 해결이 가능한지?
  // 가능하면 시간을 줄이고, 불가능하면 늘린다.
  const mid = Math.floor((start + end) / 2);

  let sum = 0;

  for (let i = 0; i < times.length; i += 1) {
    const count = Math.floor(mid / times[i]);
    sum += count;
  }

  if (sum >= N) {
    end = mid - 1;
    ans = Math.min(ans, mid);
  } else {
    start = mid + 1;
  }
}

console.log(ans);
