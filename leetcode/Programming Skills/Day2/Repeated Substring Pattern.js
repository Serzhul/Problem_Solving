/**
 * @param {string} s
 * @return {boolean}
 */

const s = "abab";

// const s = "aba";

const repeatedSubstringPattern = (s) => {
  let word = "";
  for (let i = 0; i < s.length; i += 1) {
    let start = i;
    let end = i + word.length;

    if (word.length === 0) word += s[i];
    else {
      let nextWord = s.slice(start, end);

      while (word === nextWord) {
        if (end === s.length) return true;
        start += word.length;
        end += word.length;
        nextWord = s.slice(start, end);
        if (word !== nextWord) {
          break;
        }
      }

      word += s[i];
    }
  }
  return false;
};

console.log(repeatedSubstringPattern(s));
