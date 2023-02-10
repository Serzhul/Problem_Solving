const N = 16;
const stations = [9];
const W = 2;

function solution(n, stations, w) {
  let count = 0;
  const range = 2 * w + 1;
  let from = 1;

  stations.forEach((station) => {
    const to = station - w;
    if (to > from) {
      const countRange = to - from;
      count += Math.ceil(countRange / range);
    }

    from = station + w + 1;
  });

  if (from <= n) {
    const to = n + 1;
    const countRange = to - from;
    count += Math.ceil(countRange / range);
  }

  return count;
}

console.log(solution(N, stations, W));
