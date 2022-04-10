function solution(n, left, right) {
  const arr = [];

  for (let i = left; i <= right; i += 1) {
    const x = i % n;
    const y = Math.floor(i / n);

    arr.push(Math.max(x, y) + 1);
  }
  return arr;
}

solution(3, 2, 5);
