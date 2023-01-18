/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const s = "abcd";
const t = "abcde";

const findTheDifference = (s, t) => {
  const charMap = {};

  [...s].forEach((char) => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  for (let i = 0; i < t.length; i += 1) {
    if (!charMap[t[i]]) return t[i];
    charMap[t[i]] -= 1;
  }

  return t[t.length - 1];
};

console.log(findTheDifference(s, t));
