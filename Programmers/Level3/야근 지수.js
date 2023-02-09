const n = 4;
const works = [4, 3, 3];

function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;

  const sorted = works.sort((a, b) => a - b);
  const len = works.length;

  let restTime = n;

  while (restTime) {
    const max = sorted[len - 1];

    for (let i = len - 1; i >= 0; i -= 1) {
      if (sorted[i] >= max) {
        sorted[i] -= 1;
        restTime -= 1;
      }
      if (!restTime) break;
    }
  }

  return sorted.reduce((a, b) => a + b ** 2, 0);
}

console.log(solution(n, works));
