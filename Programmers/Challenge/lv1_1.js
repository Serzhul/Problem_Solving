const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i += 1) {
    sum += signs[i] ? absolutes[i] : -absolutes[i];
  }

  return sum;
}

console.log(solution(absolutes, signs));
