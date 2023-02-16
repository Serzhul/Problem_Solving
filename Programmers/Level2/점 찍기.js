const k = 1;
const d = 1000000;

// Solution : 수학적 사고법을 알고 있어야 함

function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    const y = parseInt(Math.sqrt(d ** 2 - x ** 2), 10);

    answer += parseInt(y / k, 10) + 1;
  }
  return answer;
}

console.log(solution(k, d));
