const n = 4;
const s = 321;

function solution(n, s) {
  if (s / n < 1) return [-1];
  const rest = s % n;
  const minVal = Math.floor(s / n);

  const res = Array.from({ length: n }, () => minVal);

  for (let i = 0; i < rest; i += 1) {
    res[res.length - 1 - i] += 1;
  }

  return res;
}

console.log(solution(n, s));
