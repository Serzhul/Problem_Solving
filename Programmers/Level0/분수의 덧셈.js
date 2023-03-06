const numer1 = 1;
const denom1 = 2;
const numer2 = 3;
const denom2 = 4;

const GCD = (a, b) => (b ? GCD(b, a % b) : a);
const LCM = (a, b) => (a * b) / GCD(a, b);

function solution(numer1, denom1, numer2, denom2) {
  const newDenom = denom1 * denom2;
  const newNumer1 = numer1 * denom2;
  const newNumer2 = numer2 * denom1;

  const newNumer = newNumer1 + newNumer2;

  const gcd = GCD(newNumer, newDenom);

  return [(newNumer1 + newNumer2) / gcd, newDenom / gcd];
}

console.log(solution(numer1, denom1, numer2, denom2));
