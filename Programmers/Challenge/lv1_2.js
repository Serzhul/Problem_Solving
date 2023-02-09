const left = 13;
const right = 17;

function solution(left, right) {
  // 약수의 개수가 짝수, 홀수
  let sum = 0;

  for (let start = left; start <= right; start += 1) {
    let count = 1;

    for (let i = 2; i <= start; i += 1) {
      if (start % i === 0) count += 1;
    }

    if (count % 2 === 0) sum += start;
    else sum -= start;
  }

  return sum;
}
console.log(solution(left, right));
