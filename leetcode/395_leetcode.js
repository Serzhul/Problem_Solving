var longestSubstring = function (s, k) {
  const nMap = new Map();

  for (let i = 0; i < s.length; i++) {
    nMap.set(s[i], nMap.get(s[i]) + 1 || 1);
  }

  let res = "";

  for (let j = 0; j < s.length; j++) {}
};

longestSubstring("ababbc", 2);
