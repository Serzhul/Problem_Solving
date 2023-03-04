const babbling = ["aya", "yee", "u", "maa", "wyeoo"];

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl, idx) => {
    for (let i = 0; i < words.length; i += 1) {
      babbl = babbl.split(words[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return possible + 1;
  }, 0);
}

console.log(solution(babbling));
