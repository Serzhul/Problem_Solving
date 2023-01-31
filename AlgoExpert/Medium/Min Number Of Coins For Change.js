const n = 6;
const denoms = [1, 2, 4];

function minNumberOfCoinsForChange(n, denoms) {
  const ways = Array.from({ length: n + 1 }, () => Infinity);

  ways[0] = 0;

  for (let i = 0; i < denoms.length; i += 1) {
    const denom = denoms[i];
    for (let amount = 0; amount <= n; amount += 1) {
      if (denom <= amount) {
        ways[amount] = Math.min(ways[amount], ways[amount - denom] + 1);
      }
    }
  }

  return ways[n] !== Infinity ? ways[n] : -1;
}

console.log(minNumberOfCoinsForChange(n, denoms));
