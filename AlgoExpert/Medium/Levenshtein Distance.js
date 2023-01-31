// const str1 = "biting";
// const str2 = "mitten";

const str1 = "abc";
const str2 = "yabd";

function levenshteinDistance(str1, str2) {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => 0)
  );

  const [row, col] = [str1.length, str2.length];

  dp[0][0] = 0;

  for (let i = 0; i <= row; i += 1) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= col; j += 1) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= row; i += 1) {
    for (let j = 1; j <= col; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[row][col];
}

console.log(levenshteinDistance(str1, str2));
