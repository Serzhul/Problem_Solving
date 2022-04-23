const isAnagram = (s, t) => {
  const hashMap = {};

  for (let i = 0; i < s.length; i += 1) {
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
  }

  for (let j = 0; j < t.length; j += 1) {
    hashMap[t[j]] = (hashMap[t[j]] || 0) - 1;
  }

  return Object.values(hashMap).filter((val) => val !== 0).length === 0;
};

isAnagram("anagram", "nagaram");
