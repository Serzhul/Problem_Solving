const solution = (input) => {
  const [e1, e2, e3] = input
    .toString()
    .trim()
    .split(" ")
    .map((num) => Number(num));

  // 같은 눈 3개 => 10,000 + (같은 눈) * 1,000
  // 같은 눈 2개 => 1,000 + (같은 눈) * 100
  // 같은 눈 X => 가장 큰 눈 * 100

  const sorted = [e1, e2, e3].sort((a, b) => b - a);

  const set = new Set(sorted);

  if (set.size === 1) {
    console.log(10000 + sorted[0] * 1000);
  } else if (set.size === 2) {
    console.log(1000 + sorted[1] * 100);
  } else {
    console.log(sorted[0] * 100);
  }
};

solution(`6 2 5`);
