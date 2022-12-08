// 길이 N의 단어를 만들 때, 다음과 같은 조건이 있다.
// 1. M개의 주어진 단어로 구성한다
// 2. 반드시 최소 2개의 자음과 최소 1개의 모음이 있어야 한다.
// 3. 단어를 사전순으로 나타내야 한다.

function checkCondition(ans) {
  let ja = 0;
  let mo = 0;

  ans.forEach((char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      mo += 1;
    } else {
      ja += 1;
    }
  });

  return ja >= 2 && mo >= 1;
}

function backtracking(N, M, char, cur, ans) {
  if (ans.length === N) {
    if (checkCondition(ans)) console.log(ans);
    return;
  }

  for (let i = cur; i < M; i += 1) {
    if (!ans.includes(char[i])) {
      ans.push(char[i]);
      backtracking(N, M, char, i + 1, ans);
      ans.pop();
    }
  }
}

const N = 4;
const M = 6;
const char = ["a", "t", "c", "i", "s", "w"].sort();

backtracking(N, M, char, 0, []);
