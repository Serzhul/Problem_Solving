const babbling = ["wooyemawooye", "mayaa", "ymaeaya"];

// function solution(babbling) {
//   const canSpeakWords = ["aya", "ye", "woo", "ma"];

//   const combinations = [];

//   const dfs = (comb) => {
//     if (comb.length >= 1) combinations.push(comb.join(""));
//     if (comb.length > 10) {
//       return;
//     }

//     for (let i = 0; i < canSpeakWords.length; i += 1) {
//       const lastWord = comb[comb.length - 1];
//       if (lastWord !== canSpeakWords[i]) {
//         comb.push(canSpeakWords[i]);
//         dfs(comb);
//         comb.pop();
//       }
//     }
//   };

//   dfs([]);

//   return babbling.reduce((acc, cur) => {
//     if (combinations.includes(cur)) return acc + 1;
//     return acc;
//   }, 0);
// }

// Solution2

function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl, index) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return possible + 1;
  }, 0);
}

console.log(solution(babbling));
