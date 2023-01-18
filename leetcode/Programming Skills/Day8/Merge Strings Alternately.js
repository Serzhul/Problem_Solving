/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// const word1 = "abc";
// const word2 = "pqr";

// const word1 = "ab";
// const word2 = "pqrs";

const word1 = "abcd";
const word2 = "pq";

const mergeAlternately = (word1, word2) => {
  let res = "";

  const longerLen = Math.max(word1.length, word2.length);

  for (let i = 0; i < longerLen; i += 1) {
    if (word1[i]) {
      res += word1[i];
    }

    if (word2[i]) {
      res += word2[i];
    }
  }

  return res;
};

console.log(mergeAlternately(word1, word2));
