function bfs(N, M) {
  const queue = [];

  queue.push([N, 0]);

  // 최소 시간
  let minTime = null;

  // 각 몇 초 후에
  const timeMap = {};

  while (queue.length) {
    console.log(queue);
    const [cur, time] = queue.shift();

    if (cur < 0 || cur > 10000) continue;

    if (minTime !== null && time > minTime) continue;

    if (cur === M) {
      // BFS는 처음 조건 값을 만났을 때 최단거리를 보장해준다
      minTime = time;

      if (timeMap[minTime] === undefined) {
        timeMap[minTime] = 0;
      }

      timeMap[minTime] += 1;
    }

    queue.push([cur - 1, time + 1]);
    queue.push([cur + 1, time + 1]);
    queue.push([cur * 2, time + 1]);
  }

  console.log(minTime, timeMap);
}

const N = 5;
const M = 17;

bfs(N, M);
