// 철수와 영수가 숨바꼭질을 한다. 이때 철수는 N, 영수는 K에 있을 때, 영수는 X-1, X+1, X*2 위치로 이동할 수 있다.
// 가장 빠른 시간이 몇초 후인지, 가장 빠른 시간으로 찾는 방법이 몇 가지 인지 구하라
// (0 < X <= 10000)

let [N, K] = [5, 17];

let minTime = null;

const timeMap = {};

// bfs => N초 후 계산 용이
const queue = [];
queue.push([N, 0]);

while (queue.length) {
  const [cur, time] = queue.shift();

  // 휴리스틱 (프루닝)
  if (cur < 0 || cur > 10000) continue;

  if (minTime !== null && time > minTime) {
    continue;
  }

  if (cur === K) {
    minTime = time;

    if (!timeMap.hasOwnProperty(minTime)) {
      timeMap[minTime] = 0;
    }
    timeMap[minTime] += 1;
  }

  queue.push([cur - 1, time + 1]);
  queue.push([cur + 1, time + 1]);
  queue.push([cur * 2, time + 1]);
}

console.log(minTime, timeMap[minTime]);
