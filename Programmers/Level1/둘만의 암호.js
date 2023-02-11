// const s = "abccc";
// const skip = "c";
// const index = 3;

const s = "ybcde";
const skip = "az";
const index = 1;

// 틀린 풀이
function solution(s, skip, index) {
  const res = [];
  const skipMap = {};
  [...skip].forEach((char) => {
    skipMap[char] = char.charCodeAt();
  });

  for (let i = 0; i < s.length; i += 1) {
    const cur = s[i];
    const curCode = cur.charCodeAt();
    let skipCount = 0;
    let idxCount = 1;

    while (idxCount <= index) {
      const checkChar = String.fromCharCode(curCode + idxCount);

      if (skipMap[checkChar]) skipCount += 1;

      idxCount += 1;
    }

    let newCode = curCode + (index + skipCount);

    if (newCode >= 123) newCode -= 26;

    while (skipMap[String.fromCharCode(newCode)]) {
      newCode += 1;
    }

    res.push(String.fromCharCode(newCode));
  }

  return res.join("");
}

console.log(solution(s, skip, index));
