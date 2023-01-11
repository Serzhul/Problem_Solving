/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// const s = "cbaebabacd";
// const p = "abc";

const s = "baa";
const p = "aa";

const findAnagrams = (a, b) => {
  const output = [];
  const charMap = {};

  [...b].forEach((char) => {
    charMap[char] = charMap[char] + 1 || 1;
  });

  let left = 0;
  let right = 0;

  let count = b.length;

  while (right < a.length) {
    if (charMap[a[right]] > 0) count -= 1;

    charMap[a[right]] -= 1;
    right += 1;

    if (count === 0) output.push(left);

    if (right - left === b.length) {
      if (charMap[a[left]] >= 0) count += 1;

      charMap[a[left]] += 1;
      left += 1;
    }
  }

  return output;
};

console.log(findAnagrams(s, p));
