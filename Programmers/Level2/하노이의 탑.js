const n = 2;

function solution(n) {
  const answer = [];

  const moveHanoi = (n, x, y) => {
    if (n > 1) moveHanoi(n - 1, x, 6 - x - y);

    answer.push([x, y]);

    if (n > 1) moveHanoi(n - 1, 6 - x - y, y);
  };

  moveHanoi(n, 1, 3);

  return answer;
}

console.log(solution(n));
