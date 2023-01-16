/**
 * @param {string[]} words
 * @return {number}
 */

// const words = ["lc", "cl", "gg"];

// const words = ["ab", "ty", "yt", "lc", "cl", "ab"];

// const words = ["cc", "ll", "xx"];

const words = [
  "dd",
  "aa",
  "bb",
  "dd",
  "aa",
  "dd",
  "bb",
  "dd",
  "aa",
  "cc",
  "bb",
  "cc",
  "dd",
  "cc",
];

const reverse = (word) => word.split("").reverse().join("");

// const longestPalindrome = (words) => {
//   const wordMap = {};
//   let counter = 0;

//   words.forEach((word) => {
//     const reversed = reverse(word);

//     if (wordMap[word]) {
//       wordMap[word] -= 1;
//       counter += 4;
//     } else {
//       wordMap[reversed] = wordMap[reversed] + 1 || 1;
//     }

//     console.log(wordMap);
//   });

//   const hashGotMorePalindromes = Object.keys(wordMap).filter(
//     (word) => wordMap[word] && reverse(word) === word
//   );

//   if (hashGotMorePalindromes.length) counter += 2;

//   return counter;
// };

// Solution 2

const longestPalindrome = (words) => {
  const allTwoCharStrings = new Array(26);
  for (let i = 0; i < 26; i += 1) {
    allTwoCharStrings[i] = new Array(26);
    allTwoCharStrings[i].fill(0);
  }

  words.forEach((word) => {
    const i = word.charCodeAt(0) - "a".charCodeAt(0);
    const j = word.charCodeAt(1) - "a".charCodeAt(0);
    allTwoCharStrings[i][j] += 1;
  });

  let pairs = 0;
  let center = 0;

  for (let i = 0; i < 26; i += 1) {
    for (let j = 0; j < 26; j += 1) {
      const currVal = allTwoCharStrings[i][j];
      if (i === j) {
        pairs += Math.floor(currVal / 2);
        center = center || currVal % 2;
      } else {
        const complVal = allTwoCharStrings[j][i];
        pairs += Math.min(currVal, complVal);
      }
      allTwoCharStrings[i][j] = 0;
    }
  }

  return 2 * (pairs * 2 + center);
};

console.log(longestPalindrome(words));
