const s = "banana";

function solution(s) {
  const res = [];
  const charMap = {};

  [...s].forEach((char, idx) => {
    if (charMap[char] === undefined) {
      charMap[char] = idx;
      res.push(-1);
    } else {
      res.push(idx - charMap[char]);
      charMap[char] = idx;
    }
  });

  return res;
}

console.log(solution(s));
