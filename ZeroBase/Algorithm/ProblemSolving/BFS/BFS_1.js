// 화분에 물 주기
// N개의 화분과 K개의 물을 주는 시작점이 있고, 물은 1초에 한번씩 인접한 위치로 퍼진다. 모든 화분에 물을 주는 최소 시간 구하기

function bfs(N, start) {
  let ans = 0;

  const visit = Array.from({ length: N + 1 }, () => 0);
  const queue = [];

  const len = start.length;

  for (let i = 0; i < len; i += 1) {
    queue.push([start[i], 1]);
  }

  while (queue.length) {
    console.log(queue);
    const [cur, time] = queue.shift();

    if (visit[cur] || cur < 1 || cur > N) continue;

    visit[cur] = 1;
    ans = Math.max(ans, time);

    // 물이 왼쪽으로 퍼질떄
    queue.push([cur - 1, time + 1]);
    // 물이 오른쪽으로 퍼질떄
    queue.push([cur + 1, time + 1]);
  }

  return ans;
}

// const [N, K] = [5, 1];
// const start = [3];

// const [N, K] = [3, 3];
// const start = [1, 2, 3];

const [N, K] = [4, 1];
const start = [1];

const ans = bfs(N, start);

console.log(ans);
