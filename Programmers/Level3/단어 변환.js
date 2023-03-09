const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

const getDiff = (a, b) => [...a].filter((char, idx) => b[idx] !== char).length;

function solution(begin, target, words) {
  let minCount = Infinity;

  const dfs = (words, word, count) => {
    if (word === target) {
      minCount = Math.min(minCount, count);
      return;
    }

    for (let i = 0; i < words.length; i += 1) {
      const curDiff = getDiff(word, words[i]);

      if (curDiff === 1) {
        const filtered = words.filter((el) => el !== words[i]);
        dfs(filtered, words[i], count + 1);
      }
    }
  };

  dfs(words, begin, 0);

  return minCount === Infinity ? 0 : minCount;
}

console.log(solution(begin, target, words));
