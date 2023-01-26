const string = "abcdcba";

// Solution1 : 배열 앞뒤 비교
// function isPalindrome(string) {
//   const len = string.length;

//   for (let i = 0; i < Math.floor(len / 2); i += 1) {
//     if (string[i] !== string[len - i - 1]) return false;
//   }

//   return true;
// }

// Solution2 :
function isPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len; i += 1) {
    if (string[i] !== string[len - i - 1]) return false;
  }

  return true;
}

console.log(isPalindrome(string));
