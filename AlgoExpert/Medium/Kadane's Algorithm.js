const array = [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5];

function kadanesAlgorithm(array) {
  const dp = Array.from({ length: array.length }, () => -Infinity);
  let res = array[0];

  dp[0] = array[0];

  for (let i = 1; i < array.length; i += 1) {
    dp[i] = Math.max(dp[i], dp[i - 1] + array[i], array[i]);

    res = Math.max(res, dp[i]);
  }

  return res;
}

console.log(kadanesAlgorithm(array));
