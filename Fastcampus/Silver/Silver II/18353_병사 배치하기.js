function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

// Solution 1 : Parametric Search

// const solution = (input) => {
//   const [N, soldiers] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map(Number);
//     });

//   soldiers.reverse(); // 순서를 뒤집어서 최장 증가 부분 수열 문제로 변환

//   const arr = [0];
//   for (let i = 0; i < soldiers.length; i += 1) {
//     const soldier = soldiers[i];
//     if (arr[arr.length - 1] < soldier) arr.push(soldier);
//     else {
//       const idx = lowerBound(arr, soldier);
//       arr[idx] = soldier;
//     }
//   }

//   console.log(N - (arr.length - 1));
// };

// Solution ２ : Dynamic Programming

const solution = (input) => {
  const [N, soldiers] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  const dp = Array.from({ length: N }, () => 1);

  soldiers.reverse();

  for (let i = 1; i < N; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (soldiers[j] < soldiers[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  console.log(dp);

  console.log(N - Math.max(...dp));
};

solution(`7
15 11 4 8 5 2 4`);
