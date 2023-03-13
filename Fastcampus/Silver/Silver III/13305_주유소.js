// Solution 1 : 최소 비용을 구해서 남은 거리만큼 최대한 많이 주유한다.
// 부분 합격 => 주유소의 가격이 모두 1일 경우

const solution = (input) => {
  const [N, roads, prices] = input
    .toString()
    .trim()
    .split("\n")
    .map((el, idx) => {
      if (idx === 0) return Number(el);
      return el.split(" ").map(Number);
    });

  let minPrice = Infinity;
  let totalRoads = roads.reduce((a, b) => a + b);
  let ans = 0;

  for (let i = 0; i < prices.length - 1; i += 1) {
    minPrice = Math.min(minPrice, prices[i]);
  }

  for (let i = 0; i < roads.length; i += 1) {
    const curRoad = roads[i];
    const curPrice = prices[i];
    if (curPrice === minPrice) {
      ans += minPrice * totalRoads;
      break;
    } else {
      ans += curPrice * curRoad;
      totalRoads -= curRoad;
    }
  }

  console.log(ans);
};

// Solution 2 : 주유 비용을 비오름차순으로 변경
// const solution = (input) => {
//   const [N, dist, cost] = input
//     .toString()
//     .trim()
//     .split("\n")
//     .map((el, idx) => {
//       if (idx === 0) return Number(el);
//       return el.split(" ").map(Number);
//     });

//   let minCost = cost[0];

//   for (let i = 0; i < N; i += 1) {
//     minCost = Math.min(minCost, cost[i]);
//     cost[i] = minCost;
//   }

//   let answer = BigInt(0);

//   for (let i = 0; i < N - 1; i += 1) {
//     answer += BigInt(dist[i]) * BigInt(cost[i]);
//   }

//   console.log(String(answer));
// };

solution(`4
3 3 4
1 1 1 1`);
