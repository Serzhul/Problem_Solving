function solution(n, a, b) {
  const arr = Array.from({ length: n + 1 }, (_, i) => i);

  let answer = 0;

  while (arr[a] !== arr[b]) {
    if (arr[a] % 2 === 0) arr[a] /= 2;
    else arr[a] = (arr[a] + 1) / 2;

    if (arr[b] % 2 === 0) arr[b] /= 2;
    else arr[b] = (arr[b] + 1) / 2;

    answer += 1;
  }

  console.log(answer);
}

solution(8, 4, 7);
