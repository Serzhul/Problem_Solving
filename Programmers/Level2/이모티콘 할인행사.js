const users = [
  [40, 10000],
  [25, 10000],
];
const emoticons = [7000, 9000];

function getComb(percents, length) {
  const res = [];

  const dfs = (comb) => {
    if (comb.length === length) {
      res.push([...comb]);
      return;
    }
    for (let i = 0; i < percents.length; i += 1) {
      comb.push(percents[i]);
      dfs(comb);
      comb.pop();
    }
  };

  dfs([]);

  return res;
}

function getDiscount(price, percent) {
  return price - price * (percent / 100);
}

function solution(users, emoticons) {
  const percents = [10, 20, 30, 40];
  const discountComb = getComb(percents, emoticons.length);

  const answer = [0, 0];

  for (let i = 0; i < discountComb.length; i += 1) {
    const disPercents = discountComb[i];
    let count = 0;
    let maxTotalSum = 0;

    for (let j = 0; j < users.length; j += 1) {
      const [condition, limit] = users[j];
      let totalSum = 0;
      let usePlus = false;

      emoticons.every((et, idx) => {
        if (disPercents[idx] >= condition) {
          totalSum += getDiscount(et, disPercents[idx]);
        }

        if (totalSum >= limit) {
          usePlus = true;
          return false;
        }
        return true;
      });

      if (usePlus) count += 1;
      else maxTotalSum += totalSum;
    }

    if (count > answer[0]) {
      answer[0] = count;
      answer[1] = maxTotalSum;
    } else if (answer[0] === count && maxTotalSum > answer[1]) {
      answer[1] = maxTotalSum;
    }
  }

  return answer;
}

console.log(solution(users, emoticons));
