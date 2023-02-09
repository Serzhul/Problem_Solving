const k = 3;
const tangerine = [1, 3];

function solution(k, tangerine) {
  const map = {};

  tangerine.forEach((el) => {
    map[el] = map[el] + 1 || 1;
  });

  let count = 0;
  let idx = 0;

  const sorted = Object.values(map).sort((a, b) => b - a);

  while (k > 0 && idx < tangerine.length) {
    k -= sorted[idx];
    count += 1;
    idx += 1;
  }

  return count;
}

console.log(solution(k, tangerine));
