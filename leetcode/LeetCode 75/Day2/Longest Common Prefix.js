/**
 * @param {string[]} strs
 * @return {string}
 */

const strs = ["flower", "flow", "flight"];

// const strs = ["dog", "racecar", "car"];

// Solution 1

// const longestCommonPrefix = function (strs) {
//   let commonPrefix = "";
//   let curPrefix = "";
//   let idx = 0;
//   let maxIdx = 0;

//   for (let i = 0; i < strs.length; i += 1) {
//     if (maxIdx < strs[i].length) maxIdx = strs[i].length;
//   }

//   let found = true;

//   while (idx < maxIdx) {
//     const start = 0;

//     for (let i = start; i < strs.length; i += 1) {
//       if (curPrefix === "") {
//         curPrefix = strs[i][idx];
//       }

//       if (curPrefix !== strs[i][idx]) {
//         if (commonPrefix.length < curPrefix) commonPrefix = curPrefix;
//         found = false;
//         curPrefix = "";
//         break;
//       }
//     }

//     if (found) {
//       commonPrefix += curPrefix;
//       curPrefix = "";
//     }

//     idx += 1;
//   }

//   return commonPrefix;
// };

// Solution 2
// 문자열 정렬을 통해 순서가 가장 빠른 단어와 느린 단어 2가지만 비교해서 최대로 긴 prefix를 구하는 식으로 도출
const longestCommonPrefix = (words) => {
  const res = [];
  words.sort();

  const firstWord = words[0].split("");
  const lastWord = words[words.length - 1].split("");

  for (let i = 0; i < firstWord.length; i += 1) {
    if (firstWord[i] !== lastWord[i]) break;
    res.push(firstWord[i]);
  }

  return res.join("");
};

console.log(longestCommonPrefix(strs));
