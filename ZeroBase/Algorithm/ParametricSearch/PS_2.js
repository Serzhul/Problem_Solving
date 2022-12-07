// 전봇대를 설치하려고 한다. 설치할 수 있는 N개의 위치가 있을 때, 가장 인접한 두 전볻새 사이 거리를 가능한 크게 설치
// K개의 전봇대를 N개의 위치에 설치하여 가장 인접한 두 전봇대 사이의 가장 작은 거리가 최대가 되는 값 찾기

const [N, K] = [5, 3];
let home = [1, 2, 8, 4, 9];

home = home.sort((a, b) => a - b);

// 전봇대의 최소/최대 거리 정의
let start = 1;
let end = home[N - 1] - home[0];

let ans = 0;

while (start <= end) {
  // mid : 해당 거리를 최대로 전봇대를 설치할 수 있는 지?
  const mid = Math.floor((start + end) / 2);

  // 전봇대를 mid 거리로 설치한다.
  // 이 로직이, 파라매트릭 서치의 검증 로직
  // s: 첫번째 집, e: 두 번째 집
  let s = 0;
  let e = 1;
  let count = 1;

  while (e <= N - 1) {
    // 두 집 사이의 거리가 mid(전봇대 사이의 거리의 최댓값)보다 크면 카운트를 늘려줌
    // 그리고 그 다음 집을 검사

    if (home[e] - home[s] >= mid) {
      count += 1;
      s = e;
    }

    e += 1;
  }

  // 해당 거리를 최대라 가정하고, 전봇대 설치가 가능했다면, 크기를 더 키워본다.

  if (count >= K) {
    start = mid + 1;
    ans = Math.max(ans, mid);
  } else {
    end = mid - 1;
  }
}

// console.log(ans);
