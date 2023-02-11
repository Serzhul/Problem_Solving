const s = "aaabbaccccabba";

function solution(s) {
  const res = [];
  let x = "";
  let xCount = 0;
  let nonXCount = 0;
  let lastIdx = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (x === "") {
      x = s[i];
      xCount += 1;
    } else {
      if (x === char) {
        xCount += 1;
      } else {
        nonXCount += 1;
      }

      if (xCount === nonXCount) {
        res.push(s.slice(lastIdx, lastIdx + (xCount + nonXCount)));
        lastIdx = i + 1;
        xCount = 0;
        nonXCount = 0;
        x = "";
      }
    }
  }

  if (lastIdx < s.length) {
    res.push(s.slice(lastIdx, s.length));
  }

  return res.length;
}
console.log(solution(s));
