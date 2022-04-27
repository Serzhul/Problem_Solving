const wordBreak = (s, wordDict) => {
  const wordSet = new Set(wordDict);
  const dp = Array.from({ length: s.length + 1 }, () => false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end += 1) {
    for (let start = 0; start < end; start += 1) {
      const word = s.slice(start, end);

      if (dp[start] === true && wordSet.has(word)) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]));
