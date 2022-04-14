// 라이브러리 함수를 쓰지 않고 문자열을 뒤집는 함수를 만들어라.

// solution 1

// function reverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// solution 2

function reverse(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]];
    i += 1;
    j -= 1;
  }
}

reverse(["a", "b", "c", "d", "e", "f"]);
