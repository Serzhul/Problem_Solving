// const t = "3141592";
// const p = "271";

const t = "10203";
const p = "15";

function solution(t, p) {
  const pLen = p.length;
  let res = 0;
  for (let i = 0; i < t.length - pLen + 1; i += 1) {
    const cur = t.slice(i, i + pLen);
    if (Number(cur) <= Number(p)) res += 1;
  }

  return res;
}

console.log(solution(t, p));
