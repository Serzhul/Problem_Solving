const string = "AlgoExpert is the best!";

// Solution1 : Using Unshift Method
// function reverseWordsInString(string) {
//   const reversed = [];
//   let curStr = "";

//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] !== " ") curStr += string[i];
//     else {
//       reversed.unshift(curStr);
//       reversed.unshift(" ");
//       curStr = "";
//     }
//   }

//   reversed.unshift(curStr);

//   return reversed.join("");
// }

// Solution2 Without Unshift Method
function reverseWordsInString(string) {
  let reverse = "";

  let idx = string.length - 1;
  let curWord = "";

  while (idx >= 0) {
    const char = string[idx];
    if (char === " ") {
      reverse += curWord + " ";
      curWord = "";
    } else curWord = char + curWord;
    idx -= 1;
  }

  return reverse + curWord;
}

console.log(reverseWordsInString(string));
