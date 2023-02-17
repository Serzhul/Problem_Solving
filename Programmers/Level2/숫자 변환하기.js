const x = 2;
const y = 5;
const n = 4;

function solution(x, y, n) {
  if (x === y) return 0;

  const dp = {};

  dp[x] = 0;

  const queue = [x];

  while (queue.length) {
    const cur = queue.shift();
    const cases = [cur + n, cur * 2, cur * 3];

    for (let j = 0; j < cases.length; j += 1) {
      const curCase = cases[j];

      if (curCase > y || dp[curCase]) continue;

      if (curCase === y) return dp[cur] + 1;

      if (dp[curCase] === undefined) queue.push(curCase);
      dp[curCase] = dp[cur] + 1;
    }
  }

  return -1;
}

console.log(solution(x, y, n));
