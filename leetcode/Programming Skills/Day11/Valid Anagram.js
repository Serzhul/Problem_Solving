/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const s = "anagram";
// const t = "nagaram";

const s = "ab";
const t = "a";

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const charMap = {};

  [...s].forEach((char) => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  for (let i = 0; i < t.length; i += 1) {
    if (!charMap[t[i]]) return false;

    charMap[t[i]] -= 1;
  }

  return true;
};

isAnagram(s, t);
