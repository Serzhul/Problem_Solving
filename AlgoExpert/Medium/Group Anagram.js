const words = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"];

// Solution 1 : Sort + indexArray 사용
// function groupAnagrams(words) {
//   const indexArr = Array.from({ length: words.length }, (_, i) => i);
//   const newWords = words.map((word) =>
//     [...word].sort((a, b) => a.localeCompare(b)).join("")
//   );

//   indexArr.sort((a, b) => newWords[a].localeCompare(newWords[b]));

//   const res = [];
//   let cur = [];
//   let curWord = "";

//   for (let i = 0; i < indexArr.length; i += 1) {
//     if (!cur.length) {
//       cur.push(words[indexArr[i]]);
//       curWord = newWords[indexArr[i]];
//     } else if (curWord !== newWords[indexArr[i]]) {
//       res.push([...cur]);
//       cur = [words[indexArr[i]]];
//       curWord = newWords[indexArr[i]];
//     } else {
//       cur.push(words[indexArr[i]]);
//     }
//   }

//   if (cur.length) res.push([...cur]);

//   return res;
// }

// Solution 2:

function sortWord(word) {
  return [...word].sort((a, b) => a.localeCompare(b)).join("");
}

function groupAnagrams(words) {
  const wordMap = {};

  for (let i = 0; i < words.length; i += 1) {
    const curWord = sortWord(words[i]);
    if (wordMap[curWord]) {
      wordMap[curWord].push(words[i]);
    } else {
      wordMap[curWord] = [words[i]];
    }
  }

  return Object.values(wordMap);
}

console.log(groupAnagrams(words));
