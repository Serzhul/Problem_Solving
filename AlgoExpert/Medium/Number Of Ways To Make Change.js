const n = 6;
const denoms = [1, 5];

function numberOfWaysToMakeChange(n, denoms) {
  const ways = Array.from({ length: n + 1 }, () => 0);

  ways[0] = 1;

  for (let i = 0; i < denoms.length; i += 1) {
    for (let j = denoms[i]; j <= n; j += 1) {
      ways[j] += ways[j - denoms[i]];
    }
  }

  return ways[n];
}

console.log(numberOfWaysToMakeChange(n, denoms));
