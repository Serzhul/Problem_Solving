// const words = ["this", "that", "did", "deed", "them!", "a"];
const words = ["!!!2", "234", "222", "432"];

function minimumCharactersForWords(words) {
  const res = [];
  const wordMap = {};

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const charMap = {};

    for (let j = 0; j < word.length; j += 1) {
      const char = word[j];

      charMap[char] = charMap[char] + 1 || 1;
    }

    Object.entries(charMap).forEach(([key, value]) => {
      if (wordMap[key] === undefined) {
        wordMap[key] = value;
        for (let j = 0; j < value; j += 1) {
          res.push(key);
        }
      } else if (wordMap[key] < value) {
        for (let j = 0; j < value - wordMap[key]; j += 1) {
          res.push(key);
        }
        wordMap[key] = value;
      }
    });
  }

  return res;
}

console.log(minimumCharactersForWords(words));
