const N = 16;
const stations = [9];
const W = 2;

function solution(n, stations, w) {
  let count = 0;
  let startIdx = 0;

  for (let i = 0; i < stations.length; i += 1) {
    const toReachIdx = stations[i] - w - 1;

    count += Math.ceil((toReachIdx - startIdx) / (2 * w + 1));
    startIdx = stations[i] + w;
  }

  count += Math.ceil((n - startIdx) / (2 * w + 1));
  return count;
}

console.log(solution(N, stations, W));
