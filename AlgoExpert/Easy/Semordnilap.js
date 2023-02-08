const words = ["diaper", "abc", "test", "cba", "repaid"];

function semordnilap(words) {
  const newWords = words.map((word) =>
    [...word].sort((a, b) => a.localeCompare(b)).join("")
  );

  const wordMap = {};

  for (let i = 0; i < newWords.length; i += 1) {
    const word = newWords[i];
    if (wordMap[word]) wordMap[word].push(words[i]);
    else wordMap[word] = [words[i]];
  }

  return Object.values(wordMap).filter((comb) => comb.length >= 2);
}

console.log(semordnilap(words));
