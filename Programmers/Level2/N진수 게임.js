const n = 10;
const t = 10;
const m = 2;
const p = 1;

function solution(n, t, m, p) {
  let res = "";
  let num = 0;
  let seq = "";
  while (res.length < t) {
    if (seq.length >= m) {
      res += seq[p - 1];
      seq = seq.slice(m);
    } else {
      seq += num.toString(n).toUpperCase();
      num += 1;
    }
  }
  return res;
}

console.log(solution(n, t, m, p));
