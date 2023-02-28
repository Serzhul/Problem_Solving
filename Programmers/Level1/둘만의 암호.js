const s = "aukks";
const skip = "wbqd";
const index = 5;

// const s = "ybcde";
// const skip = "az";
// const index = 1;

// 틀린 풀이
// function solution(s, skip, index) {
//   const res = [];
//   const skipMap = {};
//   [...skip].forEach((char) => {
//     skipMap[char] = char.charCodeAt();
//   });

//   for (let i = 0; i < s.length; i += 1) {
//     const cur = s[i];
//     const curCode = cur.charCodeAt();
//     let skipCount = 0;
//     let idxCount = 1;

//     while (idxCount <= index) {
//       const checkChar = String.fromCharCode(curCode + idxCount);

//       if (skipMap[checkChar]) skipCount += 1;

//       idxCount += 1;
//     }

//     let newCode = curCode + (index + skipCount);

//     if (newCode >= 123) newCode -= 26;

//     while (skipMap[String.fromCharCode(newCode)]) {
//       newCode += 1;
//     }

//     res.push(String.fromCharCode(newCode));
//   }

//   return res.join("");
// }

// 바른 풀이 => 바로 z가 들어올 경우 고려

const getCharCode = (char) => char.charCodeAt(0);

function solution(s, skip, index) {
  const splitted = s.split("");
  const skipMap = {};

  [...skip].forEach((char) => {
    skipMap[char.charCodeAt()] = 1;
  });

  return splitted
    .map((char) => {
      let charCode = getCharCode(char);
      let count = index;

      for (let i = 0; i < count; i += 1) {
        if (charCode === 122) charCode -= 26;

        charCode += 1;

        if (skipMap[charCode]) count += 1;
      }

      return String.fromCharCode(charCode);
    })
    .join("");
}
console.log(solution(s, skip, index));
