/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Goal Time Complexity : O(n)
// Goal Space Complexity : O(1)

// const s = "ab#c";
// const t = "ad#c";

const s = "ab##";
const t = "c#d#";

// const s = "a#c";
// const t = "b";

const backspaceCompare = (s, t) => {
  const s1 = [];
  const s2 = [];

  [...s].forEach((char) => {
    if (char === "#") {
      s1.pop();
    } else {
      s1.push(char);
    }
  });

  [...t].forEach((char) => {
    if (char === "#") {
      s2.pop();
    } else {
      s2.push(char);
    }
  });

  return s1.join("") === s2.join("");
};

console.log(backspaceCompare(s, t));

// Other Solution

// const backspaceCompare = (S, T) => {
//   return edit(S) === edit(T);

//   function edit(str) {
//     let result = "";
//     let backspaces = 0;

//     for (let i = str.length - 1; i >= 0; i -= 1) {
//       if (str[i] === "#") {
//         backspaces += 1;
//       } else if (backspaces > 0) {
//         backspaces -= 1;
//       } else {
//         result = str[i] + result;
//       }
//     }

//     return result;
//   }
// };
