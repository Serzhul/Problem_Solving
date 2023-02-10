const A = [5, 1, 3, 7];
const B = [2, 2, 6, 8];

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i += 1) {
    const a = A[i];
    const max = B[B.length - 1];
    if (a < max) {
      answer += 1;
      B.pop();
    }
  }

  return answer;
}

console.log(solution(A, B));
