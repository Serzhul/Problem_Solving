const keymap = ["AC", "BA"];
const targets = ["DA"];

function solution(keymap, targets) {
  const answer = [];

  const newKeyMap = keymap.map((key) => key.split(""));

  for (let i = 0; i < targets.length; i += 1) {
    let sum = 0;

    for (let j = 0; j < targets[i].length; j += 1) {
      let minIndex = Infinity;

      for (let k = 0; k < keymap.length; k += 1) {
        const findIndex = newKeyMap[k].findIndex(
          (target) => target === targets[i][j]
        );

        if (findIndex >= 0) {
          minIndex = Math.min(minIndex, findIndex + 1);
        }
      }

      if (minIndex !== Infinity) sum += minIndex;
      else {
        sum = -1;
        break;
      }
    }

    answer.push(sum);
  }

  return answer;
}

console.log(solution(keymap, targets));
