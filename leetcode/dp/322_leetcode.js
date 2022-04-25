// 코인의 액면가가 담긴 배열이 주어질 때, 최소의 코인을 사용해 금액을 만들고 몇 개를 사용했는지 반환
// 각 코인은 무한으로 사용이 가능하다.

// Solution 1 : dfs 조합 찾기 => 시간 초과
// const coinChange = (coins, amount) => {
//   let minCoin = -1;

//   const dfs = (i, sum, used) => {
//     if (sum > amount) return;

//     if (sum === amount) {
//       if (minCoin < 0) minCoin = used.length;
//       else minCoin = Math.min(minCoin, used.length);
//       return;
//     }

//     for (let j = i; j < coins.length; j += 1) {
//       used.push(coins[j]);
//       dfs(j, sum + coins[j], used);
//       used.pop();
//     }
//   };

//   dfs(0, 0, []);

//   return minCoin;
// };

// Solution 2 : dp

const coinChange = (coins, amount) => {
  const dp = Array.from({ length: amount + 1 }, () => Infinity);

  dp[0] = 0;

  coins.forEach((coin) => {
    for (let i = coin; i <= amount; i += 1) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  });

  return dp[amount] === Infinity ? -1 : dp[amount];
};

coinChange([1, 2, 5], 11);
