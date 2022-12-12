// 경험치 모으기
// N개의 몬스터가 존재하고 해당 몬스터를 잡을 때 소모되는 HP와 경험치가 존재
// HP가 100으로 시작해 0 또는 음수가 되면 죽게 되는데, 죽지 않으면서 최대 경험치를 얼마나 얻을 수 있는지 구하기.

const N = 3;

const damage = [1, 21, 79];
const exp = [20, 30, 25];

function getMaxExp(cur, hp) {
  let maxExp = 0;

  console.log(cur, hp);

  for (let i = cur; i < N; i += 1) {
    if (hp - damage[i] <= 0) {
      continue;
    }

    maxExp = Math.max(maxExp, exp[i] + getMaxExp(i + 1, hp - damage[i]));
  }

  return maxExp;
}

// const hp = [100, 15, 1, 2, 3, 4, 6, 5];
// const exp = [49, 40, 1, 2, 3, 4, 5, 4];

const ans = getMaxExp(0, 100);

console.log(ans);
