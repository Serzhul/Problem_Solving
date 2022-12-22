/**
 * @param {string[]} strs
 * @return {string}
 */

const strs = ["flower", "flow", "flight"];

// const strs = ["dog", "racecar", "car"];

const longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  let curPrefix = "";
  let idx = 0;
  let maxIdx = 0;

  for (let i = 0; i < strs.length; i += 1) {
    if (maxIdx < strs[i].length) maxIdx = strs[i].length;
  }

  let found = true;

  while (idx < maxIdx) {
    const start = 0;
    for (let i = start; i < strs.length; i += 1) {
      if (curPrefix === "") {
        curPrefix = strs[i][idx];
      }

      if (curPrefix !== strs[i][idx]) {
        if (commonPrefix.length < curPrefix) commonPrefix = curPrefix;
        found = false;
        curPrefix = "";
        break;
      }
    }

    if (found) {
      commonPrefix += curPrefix;
      curPrefix = "";
    }

    idx += 1;
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(strs));
