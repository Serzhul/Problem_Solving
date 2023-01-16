/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const s = "cbaebabacd";
const p = "abc";

// const s = "baa";
// const p = "aa";

const findAnagrams = (s, p) => {
  const charMap = {};

  [...p].forEach((char) => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  let left = 0;
  let right = 0;
  let count = p.length;

  const res = [];

  while (right < s.length) {
    const windowRight = s[right];
    const windowLeft = s[left];

    // console.log(
    //   `left: ${left}, right: ${right}, windowLeft: ${windowLeft}, windowRight: ${windowRight}`
    // );

    if (charMap[windowRight] > 0) count -= 1;

    charMap[windowRight] -= 1;
    right += 1;

    if (count === 0) res.push(left);

    if (right - left === p.length) {
      if (charMap[windowLeft] >= 0) count += 1;
      charMap[windowLeft] += 1;
      left += 1;
    }
  }

  return res;
};

console.log(findAnagrams(s, p));
