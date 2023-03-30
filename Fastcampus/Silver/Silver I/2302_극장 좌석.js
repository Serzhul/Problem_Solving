// const solution = (input) => {
//   const [N, M, ...vips] = input.toString().trim().split("\n").map(Number);

//   const dp = Array.from({ length: 50 }, () => 0);

//   const vipMap = {};

//   vips.forEach((vip) => {
//     vipMap[vip] = true;
//   });

//   dp[0] = 1;
//   dp[1] = 1;
//   dp[2] = 2;

//   function fibo(x) {
//     if (dp[x] !== 0) return dp[x];
//     dp[x] = fibo(x - 1) + fibo(x - 2);
//     return dp[x];
//   }

//   const arr = [];
//   let start = 0;

//   for (let i = 0; i < vips.length; i += 1) {
//     arr.push(vips[i] - 1 - start);
//     start = vips[i];
//   }

//   arr.push(N - start);

//   let ans = 1;

//   arr.forEach((el) => {
//     ans *= fibo(el);
//   });

//   console.log(ans);
// };

const solution = (input) => {
  const [N, M, ...vips] = input.toString().trim().split("\n").map(Number);

  const vipMap = {};

  vips.forEach((vip) => {
    vipMap[vip] = 1;
  });

  const dp = Array.from({ length: N + 1 }, () => 0);

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i += 1) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  const arr = [];
  let start = 0;

  // VIP 좌석을 기준으로 나눈 나머지 테이블의 횟수 구하기
  for (let i = 0; i < vips.length; i += 1) {
    arr.push(vips[i] - 1 - start);
    start = vips[i];
  }

  arr.push(N - start);

  let ans = 1;

  for (let i = 0; i < arr.length; i += 1) {
    ans *= dp[arr[i]];
  }

  console.log(ans);
};

solution(`9
2
4
7`);
