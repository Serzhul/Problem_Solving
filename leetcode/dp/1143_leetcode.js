// Solution 1 : Brute Force

// const longestCommonSubsequence = (text1, text2) => {
//   const getLongestCommonSubsequence = (str1, str2, i, j) => {
//     if (i === str1.length || j === str2.length) return 0; // 종료 조건

//     if (str1[i] === str2[j])
//       return 1 + getLongestCommonSubsequence(str1, str2, i + 1, j + 1); // subsequence면 값 증가

//     return Math.max(
//       getLongestCommonSubsequence(str1, str2, i + 1, j), // text1 의 idx 옮기기
//       getLongestCommonSubsequence(str1, str2, i, j + 1) // text2의 idx 옮기기
//     );
//   };

//   return getLongestCommonSubsequence(text1, text2, 0, 0);
// };

// Solution2 : Top down

const longestCommonSubsequence = (text1, text2) => {
  const dp = Array.from({ length: text1.length + 1 }, () =>
    Array(text2.length + 1)
  );

  const getLongestCommonSubsequence = (str1, str2, i, j) => {
    if (i === str1.length || j === str2.length) return 0;

    if (dp[i][j] !== undefined) return dp[i][j];

    if (str1[i] === str2[j]) {
      dp[i][j] = 1 + getLongestCommonSubsequence(str1, str2, i + 1, j + 1);
      return dp[i][j];
    }

    dp[i][j] = Math.max(
      getLongestCommonSubsequence(str1, str2, i + 1, j),
      getLongestCommonSubsequence(str1, str2, i, j + 1)
    );
    return dp[i][j];
  };

  return getLongestCommonSubsequence(text1, text2, 0, 0);
};

// Solution3 : Bottom up

// const longestCommonSubsequence = (text1, text2) => {
//   const dp = [];
//   const m = text1.length;
//   const n = text2.length;

//   for (let i = 0; i <= m; i += 1) {
//     // 2차원 dp 배열 선언
//     dp[i] = new Array(n + 1).fill(0);
//   }

//   // text1, text2의 길이 만큼 반복하며 문자열이 존재하는지 체크 후 저장
//   for (let i = 1; i <= m; i += 1) {
//     for (let j = 1; j <= n; j += 1) {
//       if (text1[i - 1] !== text2[j - 1]) {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       } else {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       }
//     }
//   }

//   return dp[m][n];
// };

console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv"));
