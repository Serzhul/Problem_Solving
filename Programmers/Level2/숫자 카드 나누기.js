const arrayA = [4, 8, 12];
const arrayB = [5, 10, 13];

function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}

function findGCD(arr, n) {
  let result = arr[0];
  for (let i = 1; i < n; i += 1) {
    result = gcd(arr[i], result);

    if (result === 1) {
      return 1;
    }
  }
  return result;
}

console.log(solution(arrayA, arrayB));
