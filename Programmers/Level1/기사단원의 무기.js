const number = 10;
const limit = 3;
const power = 2;

// Solution1 : Brute Force
// const getDivisor = (num) => {
//   let count = 0;

//   for (let i = 1; i <= num; i += 1) {
//     if (num % i === 0) count += 1;
//   }
//   return count;
// };

// Solution2 : 시간복잡도 개선
const getDivisor = (num) => {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      if (num / i === i) count += 1;
      else count += 2;
    }
  }
  return count;
};

function solution(number, limit, power) {
  let res = 0;

  for (let i = 1; i <= number; i += 1) {
    const divisor = getDivisor(i);

    if (divisor <= limit) res += divisor;
    else res += power;
  }

  return res;
}

console.log(solution(number, limit, power));
