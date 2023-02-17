const storey = 2554;

function solution(storey) {
  let target = storey;
  let answer = 0;

  while (target) {
    const remainder = target % 10;

    if (remainder > 5) {
      answer += 10 - remainder;
      target += 10;
    } else if (remainder < 5) {
      answer += remainder;
    } else {
      if (Math.floor(target / 10) % 10 > 4) {
        target += 10;
      }

      answer += remainder;
    }
    target = Math.floor(target / 10);
  }

  return answer;
}

console.log(solution(storey));
