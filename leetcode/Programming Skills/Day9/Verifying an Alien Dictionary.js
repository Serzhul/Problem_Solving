/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

// const words = ["hello", "leetcode"];
// const order = "hlabcdefgijkmnopqrstuvwxyz";

// const words = ["word", "world", "row"];
// const order = "worldabcefghijkmnpqstuvxyz";

const words = ["hello", "hello"];
const order = "abcdefghijklmnopqrstuvwxyz";

const isAlienSorted = (words, order) => {
  const orderMap = {};

  [...order].forEach((char, i) => {
    orderMap[char] = i;
  });

  for (let i = 0; i < words.length; i += 1) {
    if (i === words.length - 1) return true;

    let compareIdx = 0;

    let word1 = words[i][compareIdx];
    let word2 = words[i + 1][compareIdx];

    const maxLen = Math.max(words[i].length, words[i + 1].length);

    while (word1 === word2) {
      if (compareIdx >= maxLen) {
        compareIdx = i;
        word1 = words[i][compareIdx];
        word2 = words[i + 1][compareIdx];
        break;
      }
      compareIdx += 1;
      word1 = words[i][compareIdx];
      word2 = words[i + 1][compareIdx];
    }

    if (orderMap[word1] > orderMap[word2] || !word2) return false;
  }
};

console.log(isAlienSorted(words, order));
