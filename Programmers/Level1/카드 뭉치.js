const cards1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const cards2 = ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
const goal = ["a", "k", "c", "l"];

function solution(cards1, cards2, goal) {
  let lastIdx1 = 0;
  let lastIdx2 = 0;

  for (let i = 0; i < goal.length; i += 1) {
    const curWord = goal[i];

    const curIdx1 = cards1.indexOf(curWord);
    const curIdx2 = cards2.indexOf(curWord);

    if (curIdx1 < 0 && curIdx2 < 0) return "No";

    if (curIdx1 >= 0 && lastIdx1 > curIdx1) return "No";
    if (curIdx2 >= 0 && lastIdx2 > curIdx2) return "No";

    if (curIdx1 >= 0 && curIdx1 - lastIdx1 >= 2) return "No";
    if (curIdx2 >= 0 && curIdx2 - lastIdx2 >= 2) return "No";

    lastIdx1 = curIdx1 >= 0 ? curIdx1 : lastIdx1;
    lastIdx2 = curIdx2 >= 0 ? curIdx2 : lastIdx2;
  }

  return "Yes";
}

console.log(solution(cards1, cards2, goal));
