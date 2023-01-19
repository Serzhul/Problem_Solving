/**
 * @param {string} s
 * @return {string}
 */

// const s = "10#11#12";
const s = "1326#";

const freqAlphabets = (s) => {
  const charMap = {};

  let res = "";

  for (let i = 1; i <= 26; i += 1) {
    const alpha = String.fromCharCode(96 + i);
    if (96 + i <= 105) {
      charMap[i] = alpha;
    } else {
      charMap[`${i}#`] = alpha;
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    if (s[i + 2] === "#") {
      res += charMap[s.slice(i, i + 3)];
      i += 2;
    } else {
      res += charMap[s[i]];
    }
  }

  return res;
};

console.log(freqAlphabets(s));
