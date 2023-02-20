const elements = [7, 9, 1, 1, 4];

function solution(elements) {
  const n = elements.length;
  const sums = new Set();
  for (let start = 0; start < n; start += 1) {
    let sum = 0;
    for (let len = 1; len <= n; len += 1) {
      sum += elements[(start + len - 1) % n];
      sums.add(sum);
    }
  }
  return sums.size;
}

console.log(solution(elements));
