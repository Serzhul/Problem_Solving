const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

function solution(k, score) {
  const hallOfFame = [];
  const res = [];

  for (let i = 0; i < score.length; i += 1) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => b - a);
    if (hallOfFame.length > k) {
      hallOfFame.pop();
    }

    res.push(hallOfFame[hallOfFame.length - 1]);
  }

  return res;
}

console.log(solution(k, score));
