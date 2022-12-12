// N개의 땅이 있을 때, K개의 집을 설치

const [N, K] = [10, 4];
const home = [1, 2, 30, 25, 8, 14, 19, 38, 40, 50];

home.sort((a, b) => a - b);
console.log(home);

let start = 1;
let end = home[N - 1] - home[0];
let ans = 0;

// K개의 집을 설치 할 때 인접한 두 집 사이의 거리를 최대로 만들기
while (start <= end) {
  // mid : 해당 거리를 최소로 하여 집을 지을 수 있는지
  const mid = Math.floor((start + end) / 2);

  // 집을 mid 거리로 설치한다.
  let [s, e, cnt] = [0, 1, 1];

  while (e <= N - 1) {
    if (home[e] - home[s] >= mid) {
      cnt += 1;
      s = e;
    }

    e += 1;
  }

  // 해당 거리 mid를 최소라고 가정하고 집 설치가 가능했다면.

  if (cnt >= K) {
    start = mid + 1;

    if (cnt === K) {
      ans = Math.max(ans, mid);
    }
  } else {
    end = mid - 1;
  }
}

console.log(ans);
