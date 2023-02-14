const k = 3;
const m = 3;
const score = [1, 5, 4, 3, 2, 3];

function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let appleIdx = score.length;
  let startIdx = 0;
  let res = 0;

  while (appleIdx >= m) {
    let sum = 0;
    const min = score[startIdx + m - 1];
    sum += min * m;

    res += sum;
    appleIdx -= m;
    startIdx += m;
  }

  return res;
}

console.log(solution(k, m, score));
