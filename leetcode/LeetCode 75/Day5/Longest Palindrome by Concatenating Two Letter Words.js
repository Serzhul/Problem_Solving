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

const longestPalindrome = (words) => {
  const wordMap = {};
  let counter = 0;

  words.forEach((word) => {
    const reversed = reverse(word);

    if (wordMap[word]) {
      wordMap[word] -= 1;
      counter += 4;
    } else {
      wordMap[reversed] = wordMap[reversed] + 1 || 1;
    }
  });

  const hashGotMorePalindromes = Object.keys(wordMap).filter(
    (word) => wordMap[word] && reverse(word) === word
  );

  if (hashGotMorePalindromes.length) counter += 2;

  return counter;
};

console.log(longestPalindrome(words));
