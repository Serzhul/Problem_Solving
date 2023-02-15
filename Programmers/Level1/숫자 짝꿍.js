const X = "9020";
const Y = "1020";

function solution(X, Y) {
  const res = [];
  const XMap = {};
  let onlyZero = true;

  for (let i = 0; i < X.length; i += 1) {
    const num = X[i];
    XMap[num] = XMap[num] + 1 || 1;
  }

  for (let i = 0; i < Y.length; i += 1) {
    const cur = Y[i];

    if (XMap[cur] >= 1) {
      XMap[cur] -= 1;
      res.push(cur);
      if (cur !== "0") onlyZero = false;
    }
  }

  if (res.length === 0) return "-1";
  if (onlyZero) return "0";

  res.sort((a, b) => b - a);

  return res.join("");
}

console.log(solution(X, Y));
