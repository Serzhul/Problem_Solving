const n = 35;

// const n = 6

// Solution1 Recursive
// function getNthFib(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   return getNthFib(n - 1) + getNthFib(n - 2);
// }

// Solution2 : Memoization
function getNthFib(n, memo = { 1: 0, 2: 1 }) {
  if (n in memo) {
    return memo[n];
  }

  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  return memo[n];
}

console.log(getNthFib(n));
