const topping = [1, 2, 1, 3, 1, 4, 1, 2];

function solution(topping) {
  const setA = new Set();
  const setB = new Set();

  const map = {};

  let answer = 0;

  for (let i = 0; i < topping.length; i += 1) {
    map[topping[i]] = map[topping[i]] + 1 || 1;
    setA.add(topping[i]);
  }

  for (let i = 0; i < topping.length; i += 1) {
    const cur = topping[i];
    map[cur] -= 1;
    if (map[cur] === 0) setA.delete(cur);
    setB.add(topping[i]);
    if (setA.size === setB.size) answer += 1;
  }

  return answer;
}

console.log(solution(topping));
