function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < A.length; i += 1) {
    answer += A[i] * B[i];
  }

  return answer;
}

solution([1, 4, 2], [5, 4, 4]);
