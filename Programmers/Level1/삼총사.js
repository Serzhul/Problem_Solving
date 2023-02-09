/*
제한사항
3 ≤ number의 길이 ≤ 13
-1,000 ≤ number의 각 원소 ≤ 1,000
서로 다른 학생의 정수 번호가 같을 수 있습니다.
*/

// const number = [-2, 3, 0, 2, -5];
const number = [-3, -2, -1, 0, 1, 2, 3];
// const number = [-1, 1, -1, 1];

function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length; i += 1) {
    for (let j = i + 1; j < number.length; j += 1) {
      for (let k = j + 1; k < number.length; k += 1) {
        if (number[i] + number[j] + number[k] === 0) count += 1;
      }
    }
  }

  return count;
}

console.log(solution(number));
