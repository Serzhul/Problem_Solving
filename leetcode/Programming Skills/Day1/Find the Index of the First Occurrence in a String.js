/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const haystack = "hello";
const needle = "ll";

// const haystack = "leetcode";
// const needle = "leeto";

// const haystack = "sadbutsad";
// const needle = "sad";

const strStr = (haystack, needle) => {
  if (!needle.length) return 0;
  if (!haystack.includes(needle)) return -1;
  return haystack.split(`${needle}`)[0].length;
};

console.log(strStr(haystack, needle));
