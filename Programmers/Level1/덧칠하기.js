const n = 8;
const m = 4;
const section = [2, 3, 6];

function solution(n, m, section) {
  const painted = Array.from({ length: n + 1 }, () => 1);
  painted[0] = 0;

  for (let i = 0; i < section.length; i += 1) {
    painted[section[i]] = 0;
  }

  let lastPainted = 0;
  let count = 0;

  for (let i = 0; i < section.length; i += 1) {
    if (section[i] >= lastPainted) {
      if (!painted[section[i]]) {
        lastPainted = section[i] + m;
        count += 1;
      }
    }
  }

  return count;
}

console.log(solution(n, m, section));
