const sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

function solution(sizes) {
  let maxHorizon = Number.MIN_SAFE_INTEGER;
  let maxVertical = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < sizes.length; i += 1) {
    const [horizon, vertical] = sizes[i];
    const bigger = Math.max(horizon, vertical);
    const smaller = Math.min(horizon, vertical);

    if (maxHorizon < bigger) {
      maxHorizon = bigger;
    }

    if (maxVertical < smaller) {
      maxVertical = smaller;
    }
  }

  return maxHorizon * maxVertical;
}

console.log(solution(sizes));
