const competitions = [
  ["Bulls", "Eagles"],
  ["Bulls", "Bears"],
  ["Bulls", "Monkeys"],
  ["Eagles", "Bears"],
  ["Eagles", "Monkeys"],
  ["Bears", "Monkeys"],
];

const results = [1, 1, 1, 1, 1, 1];

function tournamentWinner(competitions, results) {
  const map = {};
  let maxPoint = -Infinity;
  let res = "";

  for (let i = 0; i < competitions.length; i += 1) {
    const [home, away] = competitions[i];

    if (results[i] === 1) {
      map[home] = map[home] + 3 || 3;
      map[away] = map[away] || 0;

      if (maxPoint < map[home]) {
        maxPoint = map[home];
        res = home;
      }
    } else if (results[i] === 0) {
      map[away] = map[away] + 3 || 3;
      map[home] = map[home] || 0;

      if (maxPoint < map[away]) {
        maxPoint = map[away];
        res = away;
      }
    }
  }

  return res;
}

console.log(tournamentWinner(competitions, results));
