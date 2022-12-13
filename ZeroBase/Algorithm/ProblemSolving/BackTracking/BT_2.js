// 모든 경우의 수
// N개의 숫자가 주어질 때 + 혹은 -를 이용하여 K라는 값을 만들 때, 모든 경우의 수 구하기

function calc(N, K, arr, cur, ans, expr) {
  console.log(
    `len: ${expr.length}, ans: ${ans}, ans === K ${ans === K} expr : ${expr}`
  );

  let count = 0;

  if (expr.length === N && ans === K) {
    console.log(expr);
    return 1;
  }

  for (let i = cur; i < N; i += 1) {
    count += calc(N, K, arr, i + 1, ans + 1, [...expr, "+1"]);

    count += calc(N, K, arr, i + 1, ans - 1, [...expr, "-1"]);
    // expr.push("+1");
    // i += 1;
    // ans += 1;
    // count += calc(N, K, arr, i, ans, expr);
    // i -= 1;
    // ans -= 1;
    // expr.pop();

    // expr.push("-1");
    // i += 1;
    // ans -= 1;
    // count += calc(N, K, arr, i, ans, expr);
    // ans += 1;
    // i -= 1;
    // expr.pop();
  }

  return count;
}

const [N, K] = [5, 3];

const arr = [1, 1, 1, 1, 1];

const ret = calc(N, K, arr, 0, 0, []);

console.log(ret);
